"use client";
import { useState } from "react";
import styles from "./googleLogInBTN.module.css";
import Image from "next/image";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/utils/firebase/firebase";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import ErrorMessage from "@/components/auth/ErrorMessage_temp/ErrorMessage_temp";
const GoogleLogInBTN: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const handleGoogleLog = async () => {
    if (isLoading) return;
    setError("");
    try {
      setIsLoading(true);
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      if (err instanceof FirebaseError) {
        if (err.code === "auth/popup-closed-by-user") return;
        setError(err.message || "Login failed Please try again");
      } else {
        setError("Login failed Please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.BTNcontainer}>
      <button
        className={styles.googleLogBTN}
        onClick={handleGoogleLog}
        disabled={isLoading}
      >
        <Image
          src="/icons/google.png"
          alt="google-icon"
          width={25}
          height={25}
          className={styles.googleIcon}
        />
        Continue with Google
      </button>
      <ErrorMessage error={error} />
    </div>
  );
};

export default GoogleLogInBTN;
