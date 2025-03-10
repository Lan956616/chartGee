import styles from "./style.module.css";
import HeaderEditPage from "@/components/headereditpage/headereditpage";
import Sidebar from "@/components/sidebar/sidebar";
const BarChartEditPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <HeaderEditPage />
      <main className={styles.main}>
        <Sidebar />
      </main>
    </div>
  );
};

export default BarChartEditPage;
