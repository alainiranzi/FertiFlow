"use client";

import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <button
        type="submit"
        className="w-full bg-[var(--clr-primary)] text-white py-3 rounded-lg"
      >
        Sign in
      </button>
    </form>
  );
}
