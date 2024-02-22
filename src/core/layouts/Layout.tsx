import Head from "next/head";
import React, { FC, Suspense } from "react";
import { AppShell, Header, Text, Footer, Anchor, Button } from "@mantine/core";
import { Horizontal, Vertical } from "mantine-layout-components";
import { Routes } from "@blitzjs/next";
import Link from "next/link";
import { useMutation } from "@blitzjs/rpc";
import logout from "src/features/auth/mutations/logout";

const Layout: FC<{ title?: string; maxWidth?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  const thisYear = new Date().getFullYear();
  const [logoutMutation] = useMutation(logout);

  return (
    <>
      <Head>
        <title>{title || "ship-playground"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback="Loading...">
        <AppShell
          padding="md"
          // navbar={
          //   <Navbar width={{ base: 300 }} height={500} p="xs">
          //     {/* Navbar content */}
          //   </Navbar>
          // }
          header={
            <Header height={60} p="xs">
              <Horizontal fullH spaceBetween>
                <Anchor
                  component={Link}
                  href={Routes.Home()}
                  color="grey.3"
                  underline={false}
                  fw="bold"
                  size="xl"
                >
                  {" "}
                  <div>Techio</div>
                </Anchor>

                <Button
                  size="xs"
                  variant="light"
                  onClick={async () => {
                    await logoutMutation();
                  }}
                >
                  Logout
                </Button>
              </Horizontal>
            </Header>
          }
          footer={
            <Footer height={30}>
              <Horizontal fullH center>
                <Text size="xs" color="dimned">
                  copyright {thisYear}
                </Text>
              </Horizontal>
            </Footer>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          })}
        >
          <Vertical fullH fullW>
            {children}
          </Vertical>
        </AppShell>
      </Suspense>
    </>
  );
};

export default Layout;
