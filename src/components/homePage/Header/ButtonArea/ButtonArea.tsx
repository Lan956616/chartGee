"use client";
import { useAppSelector } from "@/lib/hooks";
import styles from "./buttonArea.module.css";
import Button from "@/components/common/Button/Button";
import Link from "next/link";
import { handleSignOut } from "@/utils/auth/signOutUser";

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
              <Link href="/projects">My Charts</Link>
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
