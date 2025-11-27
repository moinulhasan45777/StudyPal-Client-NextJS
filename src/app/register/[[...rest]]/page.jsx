"use client";
import { SignUp } from "@clerk/nextjs";
export default function page() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1>Register</h1>

      <SignUp
        path="/register"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/"
        socialButtons={["google"]}
        formFields={[
          { type: "email", required: true },
          { type: "password", required: true },
        ]}
      />
    </div>
  );
}
