"use client";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/utils/firebase/firebase";
import GoogleLogInBTN from "@/components/googleLogInBTN/googleLogInBTN";
import { validateAuthForm } from "@/utils/auth/validateAuthForm";
import { getFirebaseErrorMessage } from "@/utils/auth/getFirebaseErrorMessage";
import { useAppSelector } from "@/lib/hooks";
import FormSubmitButton from "@/components/auth/formSubmitButton/formSubmitButton";
import ErrorMessage from "@/components/auth/errorMessage/errorMessage";
import { handleInputKeyDown } from "@/utils/editPage/handleInputKeyDown";
const LoginPage: React.FC = () => {
  const user = useAppSelector((store) => {
    return store.auth.currentUser;
  });
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("Chartgeetest@gmail.com");
  const [password, setPassword] = useState("testChartGee111");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const errorMsg = validateAuthForm({
      email,
      password,
      emailInputRef,
    });
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: unknown) {
      setError(getFirebaseErrorMessage(err, "Login"));
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);
  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.displayArea}>
        <div className={styles.picWrapper}>
          <Image
            src="/illustrations/loginDisplay.png"
            alt="display-picture"
            fill
            className={styles.pic}
          />
        </div>
        <div className={styles.displayTitle}>
          <p>
            Use ChartGee <span>Do It Amazing!</span>
          </p>
          <p>Share your designs directly via link</p>
        </div>
      </div>
      <div className={styles.formArea}>
        <div className={styles.formAreaWrapper}>
          <Link href="/">
            <Image
              src="/icons/cross.png"
              alt="close icon"
              width={25}
              height={25}
              className={styles.closeIcon}
            />
          </Link>

          <Image
            src="/logos/chartGeeWithTitle.png"
            alt="chartGee logo"
            width={230}
            height={40}
          />
          <p className={styles.title}>Create amazing content</p>
          <p className={styles.description}>
            Welcome back! Please use your email or another service to sign in.
          </p>
          <form className={styles.logInForm} onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onKeyDown={(e) => {
                handleInputKeyDown(e);
              }}
              ref={emailInputRef}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onKeyDown={(e) => {
                handleInputKeyDown(e);
              }}
            />
            <ErrorMessage error={error} />
            <FormSubmitButton isLoading={isLoading} label="Login" />
          </form>
          <p className={styles.or}>OR</p>
          <GoogleLogInBTN />
          <p className={styles.helpZone}>
            New to ChartGee?
            <Link href="/signup" className={styles.link}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
