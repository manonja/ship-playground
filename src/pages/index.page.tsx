import React from "react";
import { BlitzPage } from "@blitzjs/next";
import { UserInfo } from "../core/components/UserInfo";
import Layout from "../core/layouts/Layout";
import MainAuthenticationForm from "../core/components/MainAuthenticationForm";
import { Vertical } from "mantine-layout-components";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <UserInfo />
      <Vertical center fullH fullW>
        <MainAuthenticationForm />
      </Vertical>
    </Layout>
  );
};

export default Home;
