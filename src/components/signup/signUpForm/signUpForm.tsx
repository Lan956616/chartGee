"use client";
import { useState } from "react";
import styles from "./signUpForm.module.css";
import Image from "next/image";

const SignUpForm: React.FC = () => {
  const [step, setStep] = useState("two");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className={styles.signUpForm}>
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
            Crate an account
          </div>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
          <input type="submit" value="Register" />
        </div>
      )}
    </form>
  );
};

export default SignUpForm;
