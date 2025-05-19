"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./signUpForm.module.css";
import Image from "next/image";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase/firebase";
import GoogleLogInBTN from "@/components/googleLogInBTN/googleLogInBTN";
import { validateAuthForm } from "@/utils/auth/validateAuthForm";
import { getFirebaseErrorMessage } from "@/utils/auth/getFirebaseErrorMessage";
import FormSubmitButton from "@/components/auth/formSubmitButton/formSubmitButton";
import ErrorMessage from "@/components/auth/errorMessage/errorMessage";
import { handleInputKeyDown } from "@/utils/editPage/handleInputKeyDown";
const SignUpForm: React.FC = () => {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const [step, setStep] = useState<"one" | "two">("one");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const errorMsg = validateAuthForm({
      email,
      password,
      emailInputRef,
      requireStrongPassword: true,
    });
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: unknown) {
      setError(getFirebaseErrorMessage(err, "Signup"));
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
          <GoogleLogInBTN />
          <p className={styles.hint}>
            Keep work and life separate. Use your work email.
          </p>
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
            onKeyDown={(e) => handleInputKeyDown(e)}
            ref={emailInputRef}
          />
          <p className={styles.hint}>
            Keep work and life separate. Use your work email.
          </p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyDown={(e) => handleInputKeyDown(e)}
          />
          <ErrorMessage error={error} />
          <FormSubmitButton isLoading={isLoading} label="Register" />
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
