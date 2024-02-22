import { SecurePassword } from "@blitzjs/auth/secure-password";
import { resolver } from "@blitzjs/rpc";
import { Role } from "types";
import { email } from "src/features/auth/schemas";
import { authenticateUser } from "src/utils/auth-utils";
import { z } from "zod";

const Input = z.object({
  email,
  password: z.string(),
});

export default resolver.pipe(resolver.zod(Input), async ({ email, password }, ctx) => {
  // This throws an error if credentials are invalid
  const user = await authenticateUser(email, password);
  await ctx.session.$create({ userId: user.id, role: user.role as Role });

  return user;
});
