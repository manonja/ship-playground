import { resolver } from "@blitzjs/rpc";

import { z } from "zod";
import db from "db";

const Input = z.object({
  id: z.string(),
});
export default resolver.pipe(
  resolver.zod(Input),
  resolver.authorize(),
  async ({ id }, { session: { userId } }) => {
    return db.todo.update({
      where: {
        id,
      },
      data: {
        done: true,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
);
