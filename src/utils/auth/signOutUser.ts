import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
export const handleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
    toast.error("Sign Out Failed. Please try again.");
  }
};
