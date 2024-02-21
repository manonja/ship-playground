import React from "react";
import { Button, ButtonProps } from "@mantine/core";
import GoogleIcon from "./icons/GoogleIcon";

export function GoogleButton(props: ButtonProps & React.ComponentPropsWithoutRef<"button">) {
  return <Button leftIcon={<GoogleIcon />} variant="default" {...props} />;
}
