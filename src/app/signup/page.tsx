"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const router = useRouter();
  async function onSignup(e: React.FormEvent) {
    try {
      setLoading(true);
      e.preventDefault();
      const response = await axios.post("/api/users/signup", user);
      if (response.status === 201) {
        router.push("/login");
      } else {
        alert("Error signing up");
      }
    } catch (error) {
        console.log(error);
    }finally {
        setLoading(false);
        e.preventDefault();
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center backdrop-blur-md">
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
          {loading ? "Processing..." : "Signup Page"}
        </h1>
        <p className="text-lg text-black mb-8">Create your account below.</p>
        <form onSubmit={onSignup} className="w-full flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black"
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-black"
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
            {buttonDisabled ? "Fill all fields" : "Signup"}
          </button>
        </form>
        <button
          className="mt-8 text-blue-600 hover:text-pink-500 hover:underline w-full font-medium transition-colors duration-200"
          onClick={() => router.push("/login")}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
