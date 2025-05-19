"use client";
import styles from "./FAQItem.module.css";
import { useState } from "react";
import Image from "next/image";
type FAQItemProps = {
  question: string;
  answer: string;
};
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={styles.FAQItem}
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
    >
      <div className={`${styles.header} ${isClicked && styles.clicked}`}>
        <p className={styles.question}>{question}</p>
        <Image
          src="/arrows/blue-down-arrow.png"
          alt="toggle arrow"
          width={18}
          height={18}
          className={styles.arrow}
        />
      </div>
      {isClicked && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

export default FAQItem;
