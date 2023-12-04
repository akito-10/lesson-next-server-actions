"use server";

export async function serverAction(
  state: { name: string },
  formState: FormData
): Promise<{ name: string }> {
  const data = new Promise<{ name: string }>((resolve) =>
    resolve({
      name: formState.get("name") as string,
    })
  );

  console.log(await data);

  return await data;
}
