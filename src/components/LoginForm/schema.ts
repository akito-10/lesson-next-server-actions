import { z } from "zod";

export const loginSchema = z.object({
  name: z.string().min(6, { message: "6文字以上で入力してください。" }),
  password: z.string().min(6, { message: "6文字以上で入力してください。" }),
});
