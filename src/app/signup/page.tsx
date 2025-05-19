"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import SignUpForm from "@/components/signup/signUpForm/signUpForm";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
const SignUpPage: React.FC = () => {
  const router = useRouter();
  const user = useAppSelector((store) => {
    return store.auth.currentUser;
  });
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [router, user]);
  return (
    <div className={styles.signUpPageContainer}>
      <div className={styles.displayArea}>
        <div className={styles.whiteBoard}>
          <p>35.4M</p>
          <p>Registered users</p>
        </div>
        <div className={styles.whiteBoard}>
          <p>32K+</p>
          <p>Projects created daily</p>
        </div>
      </div>
      <div className={styles.formArea}>
        <div className={styles.formAreaWrapper}>
          <Link href="/">
            <Image
              src="/icons/cross.png"
              alt="close-icon"
              width={25}
              height={25}
              className={styles.closeIcon}
            />
          </Link>
          <Image
            src="/logos/chartGeeWithTitle.png"
            alt="logo"
            width={230}
            height={40}
          />
          <p className={styles.title}>Create amazing content</p>
          <div className={styles.description}>
            <p>Create your free account</p>
            <p>Enjoy using ChartGee </p>
          </div>
          <SignUpForm />
          <p className={styles.helpZone}>
            Have an account?
            <Link href="/login" className={styles.link}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
