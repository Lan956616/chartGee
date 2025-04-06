"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User } from "firebase/auth";
import styles from "./buttonarea.module.css";
import Button from "@/components/button/button";
import { auth } from "@/utils/firebase";
import Link from "next/link";
import { handleSignOut } from "@/utils/signOutUser";
const ButtonArea: React.FC = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [router]);
  if (isLoading) {
    return null;
  }
  if (currentUser) {
    return (
      <div className={styles.buttonWrapper}>
        <Button className={styles.accountBTN}>
          <Link href="/">My Account</Link>
        </Button>
        <Button className={styles.logoutBTN} onClick={handleSignOut}>
          Log Out
        </Button>
      </div>
    );
  }
  if (!currentUser) {
  }
  return (
    <div className={styles.buttonWrapper}>
      <Button className={styles.logBTN}>
        <Link href="/login">Log In</Link>
      </Button>
      <Button className={styles.signBTN}>
        <Link href="/signup">Sign Up Free</Link>
      </Button>
    </div>
  );
};

export default ButtonArea;
