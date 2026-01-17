// src/app/login/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    if (email === "test@example.com" && password === "123456") {
      Cookies.set("auth-token", "true", {
        expires: 7,
        path: "/",
      });
      console.log("Cookie set successfully!");
      router.push("/items");
    } else {
      setError("Wrong email or password!");
    }
  };

  const autoFillCredentials = () => {
    setEmail("test@example.com");
    setPassword("123456");
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Login Form */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white p-8 sm:p-10 md:p-12 lg:p-16 rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
            Login to TechItem Hub
          </h1>

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 text-center text-sm sm:text-base">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="test@example.com"
                required
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                required
                className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
              />
            </div>

            {/* Auto-fill Button */}
            <button
              type="button" // type="submit" না দিয়ে type="button" যাতে ফর্ম সাবমিট না হয়
              onClick={autoFillCredentials}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl text-md transition transform hover:scale-105 shadow-md"
            >
              Auto Fill Credentials
            </button>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-4 rounded-xl text-lg transition transform hover:scale-105 shadow-lg"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600 text-sm sm:text-base">
            Use: <span className="font-semibold">test@example.com</span> / <span className="font-semibold">123456</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}