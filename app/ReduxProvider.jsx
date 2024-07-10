"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../lib/store";
import { useSession } from "next-auth/react";
import { setUser } from "../lib/features/auth/authSlice";
import { useAppDispatch } from '../lib/hooks';

export default function ReduxProvider({ children }) {
  // const { data, status } = useSession();
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // if (status === "authenticated") {
    //   const dispatch = useAppDispatch();
    //   dispatch(setUser({ ...data.user, isAuthenticated: true }))
    // }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
