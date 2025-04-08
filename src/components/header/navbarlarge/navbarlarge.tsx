import styles from "./navbarlarge.module.css";
import ListItem from "../listitem/listitem";
import { useAppSelector } from "@/lib/hooks";
const NavbarLarge: React.FC = () => {
  const { currentUser: user, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
  if (!isAuthLoading && user) {
    return (
      <nav className={styles.navbarLarge}>
        <ul>
          <ListItem side="down">Create My Graph</ListItem>
        </ul>
      </nav>
    );
  }
};

export default NavbarLarge;
