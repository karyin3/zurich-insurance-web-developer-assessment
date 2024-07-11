"use client";

import Image from "next/image";
import ZurichLogo from "../../public/zurich_logo.svg";
import { useAppSelector } from "../../lib/hooks";

const Header = () => {
  const { name, email } = useAppSelector(state => state.auth.user);

  return (
    <header className="sticky top-0">
      <div className="flex w-screen px-5 py-3 bg-white justify-between shadow">
        <div>
          <p>
            Hello, {name ? name : "Welcome to Zurich Insurance Customer Portal"}
            !
          </p>
          {email && <p data-testid="header-email">(Signed in with {email})</p>}
        </div>
        <Image src={ZurichLogo} alt="logo" className="h-10 w-40" />
      </div>
    </header>
  );
};

export default Header;
