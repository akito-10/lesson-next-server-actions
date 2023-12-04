"use client";

import { useFormState } from "react-dom";
import { serverAction } from "./actions";

export function FormStateForm() {
  const [formState, formDispatch] = useFormState(serverAction, { name: "" });

  return (
    <form action={formDispatch}>
      <input type="text" name="name" />
      <p>{formState.name}</p>
      <button>push me</button>
    </form>
  );
}
