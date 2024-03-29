import { useCurrentUser } from "src/users/hooks/useCurrentUser";
import { FC } from "react";
import { Text } from "@mantine/core";
import { Vertical } from "mantine-layout-components";

export const UserInfo: FC = () => {
  const currentUser = useCurrentUser();

  if (!currentUser) return null;

  return (
    <Vertical>
      <Text>
        User id: <code>{currentUser.id}</code>
      </Text>
      <Text>
        User role: <code>{currentUser.role}</code>
      </Text>
    </Vertical>
  );
};
