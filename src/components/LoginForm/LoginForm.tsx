"use client";

import { login } from "./actions";

export default function LoginForm() {
  return (
    <form action={login}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
