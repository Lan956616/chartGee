"use client";
import { useAppSelector } from "@/lib/hooks";
import styles from "./buttonarea.module.css";
import Button from "@/components/button/button";
import Link from "next/link";
import { handleSignOut } from "@/utils/signOutUser";

const ButtonArea: React.FC = () => {
  const { currentUser: user, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
  if (isAuthLoading) {
    return null;
  } else {
    return (
      <div className={styles.buttonWrapper}>
        {user ? (
          <>
            <Button className={styles.accountBTN}>
              <Link href="/">My Graphs</Link>
            </Button>
            <Button className={styles.logoutBTN} onClick={handleSignOut}>
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Button className={styles.logBTN}>
              <Link href="/login">Log In</Link>
            </Button>
            <Button className={styles.signBTN}>
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </>
        )}
      </div>
    );
  }
};

export default ButtonArea;
