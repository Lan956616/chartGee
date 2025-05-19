"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { setUser, clearUser, setAuthDone } from "@/lib/slice/authSlice";

export const useFirebaseAuthListener = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.uid));
      } else {
        dispatch(clearUser());
      }
      dispatch(setAuthDone());
    });
    return () => unsubscribe();
  }, [dispatch]);
};
