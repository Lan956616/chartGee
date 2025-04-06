"use client";
import { useAppSelector } from "@/lib/hooks";
import Container from "@/components/container/container";
import ListItem from "../listitem/listitem";
import styles from "./navbarsmall.module.css";
import Link from "next/link";
import { handleSignOut } from "@/utils/signOutUser";
type NavbarSmallProps = {
  isClicked: boolean;
};
const NavbarSmall: React.FC<NavbarSmallProps> = ({ isClicked }) => {
  const { currentUser: user, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
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
