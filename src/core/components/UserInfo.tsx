import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import { useMutation } from "@blitzjs/rpc";
import logout from "src/features/auth/mutations/logout";
import Link from "next/link";
import { Routes } from "@blitzjs/next";
import { FC } from "react";
import { Vertical } from "mantine-layout-components";
import { Button } from "@mantine/core";

export const UserInfo: FC = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  if (currentUser) {
    return (
      <>
        <button
          onClick={async () => {
            await logoutMutation();
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    );
  } else {
    return (
      <Vertical>
        <Button component={Link} href={Routes.SignupPage()}>
          Sign Up
        </Button>
        <Button component={Link} href={Routes.LoginPage()}>
          Login
        </Button>
        {/*<Link href={Routes.SignupPage()}>*/}
        {/*  <strong>Sign Up</strong>*/}
        {/*</Link>*/}
        {/*<Link href={Routes.LoginPage()}>*/}
        {/*  <strong>Login</strong>*/}
        {/*</Link>*/}
      </Vertical>
    );
  }
};
