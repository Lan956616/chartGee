"use client";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useEffect, useState } from "react";
import Container from "@/components/container/container";
import ListItem from "../listitem/listitem";
import styles from "./navbarsmall.module.css";
import Link from "next/link";
type NavbarSmallProps = {
  isClicked: boolean;
};
const NavbarSmall: React.FC<NavbarSmallProps> = ({ isClicked }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, []);
  if (!currentUser) {
    return (
      <nav className={`${styles.navbarSmall} ${!isClicked && styles.hide}`}>
        <Container>
          <ul>
            <ListItem side="right">
              <Link href="/login">Log In</Link>
            </ListItem>
            <ListItem side="right">
              <Link href="/signup">Create My Graph</Link>
            </ListItem>
          </ul>
        </Container>
      </nav>
    );
  }
  if (currentUser) {
    return (
      <nav className={`${styles.navbarSmall} ${!isClicked && styles.hide}`}>
        <Container>
          <ul>
            <ListItem side="right">
              <Link href="/">My Graphs</Link>
            </ListItem>
          </ul>
        </Container>
      </nav>
    );
  }
};

export default NavbarSmall;
