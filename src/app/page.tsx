import styles from "./homePage.module.css";
import Header from "@/components/homePage/Header/Header";
import HeroSection from "@/components/homePage/HeroSection/HeroSection";
import StepSection from "@/components/homePage/StepSection/StepSection";
import AboutSection from "@/components/homePage/AboutSection/AboutSection";
import DisplaySection from "@/components/homePage/DisplaySection/DisplaySection";
import ChartHighlightSection from "@/components/homePage/ChartHighlightSection/ChartHighlightSection";
import FAQSection from "@/components/homePage/FAQSection/FAQSection";
import Footer from "@/components/homePage/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.homepageContainer}>
      <Header />
      <HeroSection />
      <StepSection />
      <AboutSection />
      <DisplaySection />
      <ChartHighlightSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
