import { AuthClientPlugin } from "@blitzjs/auth";
import { setupBlitzClient } from "@blitzjs/next";
import { BlitzRpcPlugin, getQueryClient } from "@blitzjs/rpc";

export const authConfig = {
  cookiePrefix: "ship-playground",
};

export const { withBlitz } = setupBlitzClient({
  plugins: [
    AuthClientPlugin(authConfig),
    BlitzRpcPlugin({
      reactQueryOptions: {
        // optional
        queries: {
          retry: 2,
        },
        mutations: {
          // N.B. this will be overridden in case you
          // define onSuccess() inside your `useMutation` options
          onSuccess: async () => {
            const queryClient = getQueryClient();
            await queryClient.invalidateQueries();
          },
        },
      },
    }),
  ],
});
