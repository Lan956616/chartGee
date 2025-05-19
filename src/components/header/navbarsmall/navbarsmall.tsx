"use client";
import { useAppSelector } from "@/lib/hooks";
import Container from "@/components/container/container";
import ListItem from "../listitem/listitem";
import styles from "./navbarsmall.module.css";
import { handleSignOut } from "@/utils/auth/signOutUser";
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
                <ListItem side="right" href="/login">
                  Log In
                </ListItem>
                <ListItem side="right" href="/signup">
                  Create My Chart
                </ListItem>
              </>
            )}
            {user && (
              <>
                <ListItem side="right" href="/projects">
                  My Charts
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
