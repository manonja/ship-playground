import React, { Suspense } from "react";
import { BlitzPage } from "@blitzjs/next";
import { UserInfo } from "../core/components/UserInfo";
import Layout from "../core/layouts/Layout";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <main>
        <div>
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
