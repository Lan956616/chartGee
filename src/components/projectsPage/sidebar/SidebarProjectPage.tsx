import { handleSignOut } from "@/utils/auth/signOutUser";
import styles from "./sidebarProjectPage.module.css";
import ListItem from "@/components/editPage/SideBar/ListItem/ListItem";
const SidebarProjectPage: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <ListItem
          href="/"
          src="/icons/darkhome.png"
          alt="home-icon"
          lightMode={true}
        >
          Home
        </ListItem>
        <ListItem
          href="/dashboard"
          src="/icons/darknewfile.png"
          alt="newfile-icon"
          lightMode={true}
        >
          New File
        </ListItem>
        <ListItem
          src="/icons/darklogout.png"
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
