import { resolver } from "@blitzjs/rpc";

import { z } from "zod";
import db from "db";

export default resolver.pipe(resolver.authorize(), async ({}, { session: { userId } }) => {
  return db.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true, role: true },
  });
});
