import { SecurePassword } from "@blitzjs/auth/secure-password";
import { resolver } from "@blitzjs/rpc";
import db from "db";
import { Role } from "types";
import { z } from "zod";
import { email, password } from "src/features/auth/schemas";

export const Input = z.object({
  email,
  password,
  name: z.string(),
});
export default resolver.pipe(resolver.zod(Input), async ({ email, name, password }, ctx) => {
  const hashedPassword = await SecurePassword.hash(password.trim());
  const user = await db.user.create({
    data: { name: name, email: email.toLowerCase().trim(), hashedPassword, role: "USER" },
    select: { id: true, name: true, email: true, role: true },
  });

  await ctx.session.$create({ userId: user.id, email: user.email, role: user.role as Role });
  return user;
});
