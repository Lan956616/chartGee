import styles from "./sideBar.module.css";
import ListItem from "./listItem/ListItem";
import { handleSignOut } from "@/utils/auth/signOutUser";
const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <ListItem href="/" src="/icons/home.png" alt="home-icon">
          Home
        </ListItem>
        <ListItem href="/dashboard" src="/icons/newfile.png" alt="newfile-icon">
          New File
        </ListItem>
        <ListItem href="/projects" src="/charts/graph.png" alt="graph-icon">
          My Charts
        </ListItem>
        <ListItem
          src="/icons/logout.png"
          alt="logout-icon"
          onClick={handleSignOut}
        >
          Log Out
        </ListItem>
      </ul>
    </nav>
  );
};

export default Sidebar;
