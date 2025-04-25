import styles from "./homepage.module.css";
import Header from "@/components/header/header";
import HeroSection from "@/components/homepage/heroSection/heroSection";
import StepSection from "@/components/homepage/stepSection/stepSection";
export default function Home() {
  return (
    <div className={styles.homepageContainer}>
      <Header />
      <HeroSection />
      <StepSection />
    </div>
  );
}
