import { handleSignOut } from "@/utils/signOutUser";
import styles from "./sidebarProjectPage.module.css";
import ListItem from "@/components/sidebar/listitem/listitem";
const SidebarProjectPage: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <ListItem href="/" src="/darkhome.png" alt="home-icon" lightMode={true}>
          Home
        </ListItem>
        <ListItem
          href="/dashboard"
          src="/darknewfile.png"
          alt="newfile-icon"
          lightMode={true}
        >
          New File
        </ListItem>
        <ListItem
          src="/darklogout.png"
          alt="logout-icon"
          onClick={handleSignOut}
          lightMode={true}
        >
          Log Out
        </ListItem>
      </ul>
    </nav>
  );
};

export default SidebarProjectPage;
