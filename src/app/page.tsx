import styles from "./homepage.module.css";
import Header from "@/components/header/header";
import HeroSection from "@/components/homepage/heroSection/heroSection";
export default function Home() {
  return (
    <div className={styles.homepageContainer}>
      <Header />
      <HeroSection />
    </div>
  );
}
