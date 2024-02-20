import Head from "next/head";
import React, { FC, Suspense } from "react";
import { BlitzLayout } from "@blitzjs/next";

const Layout: FC<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "ship-playground"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback="Loading...">{children}</Suspense>
    </>
  );
};

export default Layout;
