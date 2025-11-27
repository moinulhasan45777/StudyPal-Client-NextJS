"use client";
import { SignIn } from "@clerk/clerk-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/register"
          redirectUrl="/"
          socialButtons={["google"]}
          appearance={{
            variables: {
              alorPrimary: "#6366F1",
            },
            elements: {
              card: "bg-white shadow rounded-xl p-6",
              headerTitle: "text-2xl font-bold text-center mb-4",
              socialButtonsBlock: "flex justify-center space-x-4 mt-4",
            },
          }}
        />

        <p className="text-center mt-6 text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
