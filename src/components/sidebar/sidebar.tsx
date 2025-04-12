import styles from "./sidebar.module.css";
import ListItem from "./listitem/listitem";
import { handleSignOut } from "@/utils/signOutUser";
const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <ListItem href="/" src="/home.png" alt="home-icon">
          Home
        </ListItem>
        <ListItem href="/dashboard" src="/newfile.png" alt="newfile-icon">
          New File
        </ListItem>
        <ListItem href="/projects" src="/graph.png" alt="graph-icon">
          My Graph
        </ListItem>
        <ListItem src="/logout.png" alt="logout-icon" onClick={handleSignOut}>
          Log Out
        </ListItem>
      </ul>
    </nav>
  );
};

export default Sidebar;
