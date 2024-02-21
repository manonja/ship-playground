import { resolver } from "@blitzjs/rpc";

import { z } from "zod";

const Input = z.object({
  id: z.string().optional(),
});
export default resolver.pipe(resolver.zod(Input), resolver.authorize(), async ({ id }) => {
  return [
    { title: "buy bread" },
    { title: "buy banana" },
    { title: "buy a house" },
    { title: "buy flowers" },
  ];
});
