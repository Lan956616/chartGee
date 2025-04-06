"use client";
import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";
import { useAppSelector } from "@/lib/hooks";
import Container from "@/components/container/container";
import ListItem from "../listitem/listitem";
import styles from "./navbarsmall.module.css";
import Link from "next/link";
type NavbarSmallProps = {
  isClicked: boolean;
};
const NavbarSmall: React.FC<NavbarSmallProps> = ({ isClicked }) => {
  const { currentUser: user, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  if (isAuthLoading) {
    return null;
  } else {
    return (
      <nav className={`${styles.navbarSmall} ${!isClicked && styles.hide}`}>
        <Container>
          <ul>
            {!user && (
              <>
                <ListItem side="right">
                  <Link href="/login">Log In</Link>
                </ListItem>
                <ListItem side="right">
                  <Link href="/signup">Create My Graph</Link>
                </ListItem>
              </>
            )}
            {user && (
              <>
                <ListItem side="right">
                  <Link href="/">My Graphs</Link>
                </ListItem>
                <ListItem side="right" onClick={handleSignOut}>
                  Log Out
                </ListItem>
              </>
            )}
          </ul>
        </Container>
      </nav>
    );
  }
};

export default NavbarSmall;
