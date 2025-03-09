import Container from "@/components/container/container";
import ListItem from "../listitem/listitem";
import styles from "./navbarsmall.module.css";
type NavbarSmallProps = {
  isClicked: boolean;
};
const NavbarSmall: React.FC<NavbarSmallProps> = ({ isClicked }) => {
  return (
    <nav
      className={styles.navbarSmall}
      style={{ display: `${isClicked ? "" : "none"}` }}
    >
      <Container>
        <ul>
          <ListItem side="right">Log In</ListItem>
          <ListItem side="right">Create My Graph</ListItem>
          <ListItem side="right">My Graphs</ListItem>
        </ul>
      </Container>
    </nav>
  );
};

export default NavbarSmall;
