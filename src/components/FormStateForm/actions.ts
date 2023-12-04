"use server";

export type State = {
  name: string;
  password: string;
};

export async function serverAction(
  state: State,
  formState: FormData
): Promise<State> {
  const data = new Promise<State>((resolve) =>
    resolve({
      name: formState.get("name") as string,
      password: formState.get("password") as string,
    })
  );

  console.log(await data);

  return await data;
}
