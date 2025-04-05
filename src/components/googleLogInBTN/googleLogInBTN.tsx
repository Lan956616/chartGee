"use client";
import { useState } from "react";
import styles from "./googleLogInBTN.module.css";
import Image from "next/image";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/utils/firebase";
import { useRouter } from "next/navigation";

const GoogleLogInBTN: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleGoogleLog = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      console.error("Login Failed", err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button
      className={styles.googleLogBTN}
      onClick={handleGoogleLog}
      disabled={isLoading}
    >
      <Image
        src="/google.png"
        alt="google-icon"
        width={25}
        height={25}
        className={styles.googleIcon}
      />
      Continue with Google
    </button>
  );
};

export default GoogleLogInBTN;
