"use client";

import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppDispatch } from "../../../lib/hooks";
import { toggleEmailVisibilityByUserId } from "../../../lib/features/users/usersSlice";
import { fetchData } from "../../util/fetchData";

const ToggleEmailVisibility = ({ email, showEmail, userId }) => {
  const [renderedEmail, setRenderedEmail] = useState(email);
  useEffect(() => {
    if (showEmail) {
      const getUserById = async () => {
        const data = await fetchData("https://reqres.in/api/users", {
          id: userId
        });
        setRenderedEmail(data.data.email);
      };

      getUserById();
    } else {
      setRenderedEmail(email);
    }
  }, [showEmail]);

  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-x-4">
      <p>{renderedEmail}</p>
      <button
        onClick={() => dispatch(toggleEmailVisibilityByUserId(userId))}
        className="flex items-center"
      >
        {showEmail ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default ToggleEmailVisibility;
