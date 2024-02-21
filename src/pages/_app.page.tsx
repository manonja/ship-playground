import { AppProps, ErrorBoundary } from "@blitzjs/next";
import React, { Component } from "react";
import { withBlitz } from "src/blitz-client";
import "src/styles/globals.css";
import { RootErrorFallback } from "../core/components/RootErrorFallback";
import { MantineProvider } from "@mantine/styles";
import { Notifications } from "@mantine/notifications";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <Notifications position="top-right" />
        <Component {...pageProps} />
      </MantineProvider>
    </ErrorBoundary>
  );
}

export default withBlitz(MyApp);
