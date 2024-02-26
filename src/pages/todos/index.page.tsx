import { useMutation, useQuery } from "@blitzjs/rpc";
import fetchTodos from "src/features/todos/queries/getTodos";
import addTodo from "src/features/todos/mutations/addTodo";
import { notifications } from "@mantine/notifications";
import { Button, List, Text, Input } from "@mantine/core";
import { Vertical } from "mantine-layout-components";
import { BlitzPage } from "@blitzjs/next";
import { Suspense, useState } from "react";
import Layout from "src/core/layouts/Layout";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";

const Todos = () => {
  const currentUser = useCurrentUser();

  const [todos] = useQuery(fetchTodos, { where: { id: currentUser?.id } });
  console.log(todos);
  const [todoTitle, setTodoTitle] = useState("");
  const [$addTodo] = useMutation(addTodo, {
    onSuccess: (result) => {
      notifications.show({
        title: "Todo added!",
        message: `create todo`,
      });
    },
  });
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
          <List.Item key={todo.title}>
            <Text>{todo.title}</Text>
          </List.Item>
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
