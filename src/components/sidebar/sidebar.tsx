import styles from "./sidebar.module.css";
import ListItem from "./listitem/listitem";
const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <ListItem href="/" src="/home.png" alt="home-icon">
          Home
        </ListItem>
        <ListItem href="/" src="/newfile.png" alt="newfile-icon">
          New File
        </ListItem>
        <ListItem href="/" src="/graph.png" alt="graph-icon">
          My Graph
        </ListItem>
        <ListItem href="/" src="/logout.png" alt="logout-icon">
          Log Out
        </ListItem>
      </ul>
    </nav>
  );
};

export default Sidebar;
