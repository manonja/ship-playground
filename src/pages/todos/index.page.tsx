import { useMutation, useQuery } from "@blitzjs/rpc";
import getTodos from "src/features/todos/queries/getTodos";
import addTodo from "src/features/todos/mutations/addTodo";
import { Button, List, Text, Input, Checkbox } from "@mantine/core";
import { Horizontal, Vertical } from "mantine-layout-components";
import { BlitzPage } from "@blitzjs/next";
import React, { Suspense, useState } from "react";
import Layout from "src/core/layouts/Layout";
import toggleTodo from "src/features/todos/mutations/toggleTodo";
import cleanCompleted from "src/features/todos/mutations/cleanCompleted";

const Todo = ({ todo }) => {
  const [$toggleTodo, { isLoading }] = useMutation(toggleTodo);
  return (
    <Horizontal>
      <Checkbox
        disabled={isLoading}
        checked={todo.done}
        onClick={() => $toggleTodo({ id: todo.id })}
      />
      <Text key={todo.title}>{todo.title}</Text>
    </Horizontal>
  );
};
const Todos = () => {
  const [todos] = useQuery(getTodos, {});
  const [todoTitle, setTodoTitle] = useState("");
  const [$addTodo, { isLoading }] = useMutation(addTodo);
  const [$cleanTodos] = useMutation(cleanCompleted);
  return (
    <Vertical fullH fullW center>
      <Horizontal>
        <Input
          placeholder="Add todo"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
        <Button
          loading={isLoading}
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
          onClick={async () => {
            await $addTodo({ todoTitle });
          }}
        >
          Add Todo
        </Button>
      </Horizontal>

      <List>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </List>
      <Button
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        onClick={async () => {
          await $cleanTodos({});
        }}
      >
        Clean Todo(s)
      </Button>
    </Vertical>
  );
};

export const TodosPage: BlitzPage = () => {
  return (
    <Layout title="Todos">
      <Suspense>
        <Todos />
      </Suspense>
    </Layout>
  );
};

export default TodosPage;
