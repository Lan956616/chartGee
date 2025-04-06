import { FirebaseError } from "firebase/app";
export const getFirebaseErrorMessage = (
  err: unknown,
  type: "Login" | "Signup"
): string => {
  if (err instanceof FirebaseError) {
    if (err.code === "auth/email-already-in-use") {
      return "This email is already registered";
    } else if (err.code === "auth/invalid-credential") {
      return "Invalid email or password";
    }
  }
  return `${type} Failed. Please try again`;
};
