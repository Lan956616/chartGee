"use client";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import styles from "./stepSection.module.css";
import Link from "next/link";
import StepTab from "./stepTab/stepTab";
import StepContent from "./stepContent/stepContent";
const StepSection: React.FC = () => {
  const { currentUser } = useAppSelector((store) => {
    return store.auth;
  });
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  const displayTitle = ["1.Enter Data", "2.Customize Chart", "3.Save & Share"];
  const displayContent = [
    {
      title: "Your First Steps",
      text: `Pick a chart type that fits your needs, then copy and paste your data into the spreadsheet panel. Just your data, visualized — beautifully and instantly.`,
      src: "/charts/table.png",
      alt: "enter data",
    },
    {
      title: "Achieve Beauty With Ease",
      text: `Customize every detail of your chart — type, colors, fonts, borders... We've made sure you can fully express your data story.`,
      src: "/icons/makeup.png",
      alt: "customize graph",
    },
    {
      title: "Now It's Yours!",
      text: `Export your chart as an image, or simply share a link with your team. You can also save it to your ChartGee account to access anytime.`,
      src: "/icons/save.png",
      alt: "download graph",
    },
  ];
  return (
    <section className={styles.step}>
      <div className={styles.step_wrapper}>
        <h1 className={styles.step_title}>
          Create stunning charts for any purpose
        </h1>
        <p className={styles.step_description}>
          Building charts has never been this easy! In just three simple steps,
          design professional and engaging visualizations that impress your
          audience. Minimum effort, maximum clarity.
        </p>
        <Link
          href={currentUser ? "/dashboard" : "/signup"}
          className={styles.step_BTN}
        >
          Create My Graph
        </Link>
        <div className={styles.TitleBox}>
          {displayTitle.map((content, index) => (
            <StepTab
              key={index}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              tabTitle={content}
            />
          ))}
        </div>
        {displayContent.map((content, index) => (
          <StepContent
            key={index}
            index={index}
            src={content.src}
            alt={content.alt}
            tabTitle={content.title}
            tabContent={content.text}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default StepSection;
