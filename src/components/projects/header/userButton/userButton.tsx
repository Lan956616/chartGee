"use client";
import Image from "next/image";
import styles from "./userButton.module.css";
import { useState } from "react";
import { handleSignOut } from "@/utils/signOutUser";
const UserButton: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={`${styles.iconWrapper} ${isClicked && styles.clicked}`}
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
    >
      <Image src="/user.png" alt="user icon" width={20} height={20} />
      <button
        className={`${styles.logOutButton} ${isClicked && styles.active}`}
        onClick={handleSignOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserButton;
