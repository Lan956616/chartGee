import styles from "./navbarlarge.module.css";

import ListItem from "../listitem/listitem";
const NavbarLarge: React.FC = () => {
  return (
    <nav className={styles.navbarLarge}>
      <ul>
        <ListItem side="down">Create My Graph</ListItem>
      </ul>
    </nav>
  );
};

export default NavbarLarge;
