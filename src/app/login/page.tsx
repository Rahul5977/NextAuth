"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  function onLogin(e: React.FormEvent) {
    e.preventDefault();
    // ...login logic here...
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Login Page</h1>
        <p className="text-lg text-gray-600 mb-8">Login to your account below.</p>
        <form onSubmit={onLogin} className="w-full flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
          >
            Login
          </button>
        </form>
        <button
          className="mt-6 text-blue-600 hover:underline w-full"
          onClick={() => router.push("/signup")}
        >
          Go to Signup
        </button>
      </div>
    </div>
  );
}
