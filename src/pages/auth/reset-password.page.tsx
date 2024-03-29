import Layout from "src/core/layouts/Layout";
import { FORM_ERROR } from "src/core/components/Form";
import resetPassword from "src/features/auth/mutations/resetPassword";
import { BlitzPage, Routes } from "@blitzjs/next";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Link from "next/link";
import { assert } from "blitz";
import { useForm } from "@mantine/form";
import { Button, PasswordInput } from "@mantine/core";
import React from "react";

const ResetPasswordPage: BlitzPage = () => {
  const router = useRouter();
  const token = router.query.token?.toString();
  const [resetPasswordMutation, { isSuccess }] = useMutation(resetPassword);

  const form = useForm({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
  });
  let onSubmit = async (values: {
    token: string;
    password: string;
    passwordConfirmation: string;
  }) => {
    try {
      assert(token, "token is required.");
      await resetPasswordMutation({ ...values, token });
    } catch (error: any) {
      if (error.name === "ResetPasswordError") {
        return {
          [FORM_ERROR]: error.message,
        };
      } else {
        return {
          [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
        };
      }
    }
  };

  return (
    <Layout title="Reset Your Password">
      <h1>Set a New Password</h1>

      {isSuccess ? (
        <div>
          <h2>Password Reset Successfully</h2>
          <p>
            Go to the <Link href={Routes.Home()}>homepage</Link>
          </p>
        </div>
      ) : (
        <form onSubmit={form.onSubmit(onSubmit)}>
          <PasswordInput
            withAsterisk
            label="Password"
            placeholder=""
            {...form.getInputProps("password")}
          />

          <PasswordInput
            withAsterisk
            label="Confirm Password"
            placeholder=""
            {...form.getInputProps("passwordConfirmation")}
          />

          <Button type="submit">Submit</Button>
        </form>
      )}
    </Layout>
  );
};

ResetPasswordPage.redirectAuthenticatedTo = "/";

export default ResetPasswordPage;
