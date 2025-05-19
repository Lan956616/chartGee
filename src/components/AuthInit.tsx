"use client";
import { useFirebaseAuthListener } from "@/utils/auth/useFirebaseAuthListener";

const AuthInit: React.FC = () => {
  useFirebaseAuthListener();
  return null;
};
export default AuthInit;
