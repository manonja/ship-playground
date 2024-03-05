import { AppProps, ErrorBoundary } from "@blitzjs/next";
import React, { Component, Suspense } from "react";
import { withBlitz } from "src/blitz-client";
import "src/styles/globals.css";
import { RootErrorFallback } from "../core/components/RootErrorFallback";
import { MantineProvider } from "@mantine/styles";
import { Loader } from "@mantine/core";

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
        <Suspense fallback={<Loader />}>
          <Component {...pageProps} />
        </Suspense>
      </MantineProvider>
    </ErrorBoundary>
  );
}

export default withBlitz(MyApp);
