"use client";
import Image from "next/image";
import styles from "./userButton.module.css";
import { useState, useRef } from "react";
import { handleSignOut } from "@/utils/auth/signOutUser";
import { useClickWheelOutside } from "@/hooks/useClickWheelOutside";
const UserButton: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLButtonElement>(null);
  useClickWheelOutside(popupRef, iconRef, isClicked, () => {
    setIsClicked(false);
  });
  return (
    <div
      className={`${styles.iconWrapper} ${isClicked && styles.clicked}`}
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
      ref={iconRef}
    >
      <Image src="/icons/user.png" alt="user icon" width={20} height={20} />
      <button
        className={`${styles.logOutButton} ${isClicked && styles.active}`}
        onClick={handleSignOut}
        ref={popupRef}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserButton;
