"use client";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return <button data-testid="sign-out" onClick={() => signOut()}>Sign Out</button>;
};

export default SignOutButton;
