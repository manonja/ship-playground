import React from "react";
import { Button, ButtonProps } from "@mantine/core";
import { TwitterIcon } from "@mantinex/dev-icons";
import GoogleIcon from "./icons/GoogleIcon";

// export function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<"button">) {
//   return <Button leftIcon={<TwitterIcon />} variant="default" {...props} />;
// }

export function GoogleButton(props: ButtonProps & React.ComponentPropsWithoutRef<"button">) {
  return <Button leftIcon={<GoogleIcon />} variant="default" {...props} />;
}
