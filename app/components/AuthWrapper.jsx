"use client";

import { useEffect } from "react";
import { useAppDispatch } from "../../lib/hooks";
import { setAuthUser } from "../../lib/features/auth/authSlice";

const AuthWrapper = ({ session, children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (session) {
      dispatch(setAuthUser(session.user));
    }
  }, [dispatch]);

  return children;
};

export default AuthWrapper;
