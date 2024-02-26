import { resolver } from "@blitzjs/rpc";

import { z } from "zod";
import db from "db";

const Input = z.object({});
export default resolver.pipe(resolver.zod(Input), resolver.authorize(), async ({}) => {
  return db.todo.findMany();
});
