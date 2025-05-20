import styles from "./navbarLarge.module.css";
import ListItem from "../listItem/ListItem";
import { useAppSelector } from "@/lib/hooks";
const NavbarLarge: React.FC = () => {
  const { currentUser: user, isAuthLoading } = useAppSelector((store) => {
    return store.auth;
  });
  if (!isAuthLoading && user) {
    return (
      <nav className={styles.navbarLarge}>
        <ul>
          <ListItem side="down" href="/dashboard">
            Create Chart
          </ListItem>
        </ul>
      </nav>
    );
  }
};

export default NavbarLarge;
