import { useMutation, useQuery } from "@blitzjs/rpc";
import fetchTodos from "src/features/todos/queries/getTodos";
import addTodo from "src/features/todos/mutations/addTodo";
import { notifications } from "@mantine/notifications";
import { Button, List, Text } from "@mantine/core";
import { Vertical } from "mantine-layout-components";
import { BlitzPage } from "@blitzjs/next";
import { Suspense } from "react";
import Layout from "src/core/layouts/Layout";

const Todos = () => {
  const [todos] = useQuery(fetchTodos, {});
  const [$addTodo] = useMutation(addTodo, {
    onSuccess: (result) => {
      notifications.show({
        title: "Todo added!",
        message: result,
      });
    },
  });
  return (
    <Vertical>
      <Button
        onClick={async () => {
          await $addTodo({ todoTitle: "Add more fun" });
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
