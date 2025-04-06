import { auth } from "./firebase";
import { signOut } from "firebase/auth";
export const handleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};
