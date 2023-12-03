"use server";

import { redirect } from "next/navigation";
import { loginSchema } from "./schema";

export async function login(formData: FormData) {
  const data = {
    name: formData.get("name"),
    password: formData.get("password"),
  };

  // バリデーションを行います。
  const parsedData = loginSchema.safeParse(data);

  if (!parsedData.success) {
    // バリデーションが失敗した場合、エラーメッセージを返します。
    console.log(parsedData.error.issues);

    return;
  }

  console.log(parsedData.data);

  // ここで実際のログイン処理を行います。
  // 例えば、データベースに問い合わせたり、外部APIを呼び出したりします。
  // この例では、実際のログイン処理は省略しています。

  // ログインが成功したら、ユーザーをリダイレクトします。
  // redirect("/dashboard");
}
