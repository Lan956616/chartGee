"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./signUpForm.module.css";
import Image from "next/image";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { FirebaseError } from "firebase/app";
const SignUpForm: React.FC = () => {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const [step, setStep] = useState("one");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        if (err.code === "auth/email-already-in-use") {
          setError("This email is already registered");
        } else {
          setError("Signup failed Please try again");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit} noValidate>
      {step === "one" && (
        <div className={styles.stepOne}>
          <button
            className={styles.signUpBTN}
            onClick={() => {
              setStep("two");
            }}
          >
            Sign up with email & password
          </button>
          <div className={styles.googlelogin}>use google</div>
          <p>Keep work and life separate. Use your work email.</p>
        </div>
      )}
      {step === "two" && (
        <div className={styles.stepTwo}>
          <div
            onClick={() => {
              setStep("one");
            }}
            className={styles.prevStep}
          >
            <Image
              src="/down-arrow.png"
              alt="left-arrow"
              width={15}
              height={15}
              className={styles.arrow}
            />
            Create an account
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            ref={emailInputRef}
          />
          <p>Keep work and life separate. Use your work email.</p>
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
            className={styles.registerBTN}
            disabled={isLoading}
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
            Register
          </button>
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
