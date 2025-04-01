"use client";
import { app } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useState, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
const auth = getAuth(app);
const LoginPage: React.FC = () => {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("Chartgeetest@gmail.com");
  const [password, setPassword] = useState("testChartGee111");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Email is required");
      return;
    }
    const isValid = emailInputRef.current?.checkValidity();
    if (!isValid) {
      emailInputRef.current?.reportValidity();
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    try {
      setIsLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result) {
        router.push("/");
      }
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        if (err.code === "auth/invalid-credential") {
          setError("Invalid email or password");
        } else {
          setError("Login failed Please try again");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.displayArea}>
        <div className={styles.picWrapper}>
          <Image
            src="/loginDisplay.png"
            alt="display-picture"
            fill
            className={styles.pic}
          />
        </div>
        <div className={styles.displayTitle}>
          <p>
            Use ChartGee <span>Do It Amamzing!</span>
          </p>
          <p>Share your designs directly via link</p>
        </div>
      </div>
      <div className={styles.container}>
        <Link href="/">
          {" "}
          <Image
            src="/cross.png"
            alt="close=icon"
            width={25}
            height={25}
            className={styles.closeIcon}
          />
        </Link>

        <Image
          src="/chartGeeWithTitle.png"
          alt="logo"
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
            ref={emailInputRef}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitBTN}
          >
            {isLoading && (
              <Image
                src="/load.png"
                alt="loading-icon"
                width={20}
                height={20}
                className={styles.loadIcon}
              />
            )}
            Login
          </button>
        </form>
        <p className={styles.or}>OR</p>
        <div className={styles.googlelogin}>use google</div>
        <div className={styles.helpZone}>
          <p>
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
