"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ToggleEmailVisibility = ({ email }) => {
  const [showEmail, setShowEmail] = useState(false);

  const renderedEmail = () => {
    return showEmail ? email : email.replace(/[.a-zA-Z]/g, "*");
  };

  return (
    <div className="flex gap-x-4">
      <p>{renderedEmail()}</p>
      <button
        onClick={() => setShowEmail(!showEmail)}
        className="flex items-center"
      >
        {showEmail ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default ToggleEmailVisibility;
