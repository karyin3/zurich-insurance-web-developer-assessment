"use client";

import Image from "next/image";
import ZurichLogo from "../../public/zurich_logo.svg";
import { useAppSelector } from "../../lib/hooks";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { name, email } = useAppSelector(state => state.auth.user);

  return (
    <header className="sticky top-0">
      <div className="flex w-screen px-5 py-3 bg-white justify-between shadow">
        <div>
          <p>
            Hello, {name ? name : "Welcome to Zurich Insurance Customer Portal"}!
          </p>
          {name && email && <SignOutButton />}
        </div>
        <Image src={ZurichLogo} alt="logo" className="h-10 w-40" />
      </div>
    </header>
  );
};

export default Header;
