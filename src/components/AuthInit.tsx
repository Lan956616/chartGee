"use client";
import { useFirebaseAuthListener } from "@/utils/useFirebaseAuthListener";

const AuthInit: React.FC = () => {
  useFirebaseAuthListener();
  return null;
};
export default AuthInit;
