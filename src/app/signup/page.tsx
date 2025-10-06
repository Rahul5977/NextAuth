"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  function onSignup(e: React.FormEvent) {
    e.preventDefault();
    // ...signup logic here...
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Signup Page</h1>
        <p className="text-lg text-gray-600 mb-8">Create your account below.</p>
        <form onSubmit={onSignup} className="w-full flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
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
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
          >
            Signup
          </button>
        </form>
        <button
          className="mt-6 text-blue-600 hover:underline w-full"
          onClick={() => router.push("/login")}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
