import styles from "./homePage.module.css";
import Header from "@/components/homePage_temp/Header/Header";
import HeroSection from "@/components/homePage_temp/HeroSection/HeroSection";
import StepSection from "@/components/homePage_temp/StepSection/StepSection";
import AboutSection from "@/components/homePage_temp/AboutSection/AboutSection";
import DisplaySection from "@/components/homePage_temp/DisplaySection/DisplaySection";
import ChartHighlightSection from "@/components/homePage_temp/ChartHighlightSection/ChartHighlightSection";
import FAQSection from "@/components/homePage_temp/FAQSection/FAQSection";
import Footer from "@/components/homePage_temp/Footer/Footer";

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
