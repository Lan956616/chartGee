"use client";
import { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("TestChartGee");
  const [password, setPassword] = useState("testChartGee111");
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
        <form className={styles.logInForm}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" value="Login" />
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
