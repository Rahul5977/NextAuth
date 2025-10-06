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
   async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", user);
      if (response.status === 200) {
        router.push("/profile/123");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }finally {
        e.preventDefault();
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center backdrop-blur-md">
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
          Login Page
        </h1>
        <p className="text-lg text-black mb-8">Login to your account below.</p>
        <form onSubmit={onLogin} className="w-full flex flex-col space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-black"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold p-3 rounded-lg mt-4 w-full shadow-md hover:scale-105 transition-transform duration-200"
          >
            Login
          </button>
        </form>
        <button
          className="mt-8 text-blue-600 hover:text-pink-500 hover:underline w-full font-medium transition-colors duration-200"
          onClick={() => router.push("/signup")}
        >
          Go to Signup
        </button>
      </div>
    </div>
  );
}
