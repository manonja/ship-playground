import { useMutation, useQuery } from "@blitzjs/rpc";
import fetchTodos from "src/features/todos/queries/getTodos";
import addTodo from "src/features/todos/mutations/addTodo";
import { Button, List, Text, Input, Checkbox } from "@mantine/core";
import { Horizontal, Vertical } from "mantine-layout-components";
import { BlitzPage } from "@blitzjs/next";
import { Suspense, useState } from "react";
import Layout from "src/core/layouts/Layout";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import toggleTodo from "src/features/todos/mutations/toggleTodo";

const Todo = ({ todo }) => {
  const [$toggleTodo] = useMutation(toggleTodo);
  return (
    <Horizontal>
      <Checkbox checked={todo.done} onClick={() => $toggleTodo({ id: todo.id })} />
      <Text key={todo.title}>{todo.title}</Text>
    </Horizontal>
  );
};
const Todos = () => {
  const currentUser = useCurrentUser();

  const [todos] = useQuery(fetchTodos, { where: { id: currentUser?.id } });
  const [todoTitle, setTodoTitle] = useState("");
  const [$addTodo] = useMutation(addTodo);
  return (
    <Vertical>
      <Input
        placeholder="Add todo"
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.target.value)}
      />
      <Button
        onClick={async () => {
          await $addTodo({ todoTitle });
        }}
      >
        Add Todo
      </Button>
      <List>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </List>
    </Vertical>
  );
};

export const TodosPage: BlitzPage = () => {
  return (
    <Layout>
      <Suspense>
        <Todos />
      </Suspense>
    </Layout>
  );
};

export default TodosPage;
