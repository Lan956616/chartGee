import styles from "./FAQSection.module.css";
import FAQItem from "./FAQItem/FAQItem";
const FAQData = [
  {
    id: 1,
    question: "How can I use ChartGee for free?",
    answer:
      "ChartGee has a few different tools you can use 100% for free without entering any credit card details.",
  },
  {
    id: 2,
    question: "How can I customize my chart?",
    answer:
      "ChartGee gives you full control over your chart. You can customize colors, labels, titles to match your style and message.",
  },
  {
    id: 3,
    question: "Can I download my chart to PNG?",
    answer:
      "Yes! Once your chart is ready, you can download it as a high-quality PNG image or share a link with others. You can do this directly inside the Chart Editor.",
  },
];
const FAQSection: React.FC = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.faqWrapper}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        {FAQData.map(({ id, question, answer }) => {
          return <FAQItem key={id} question={question} answer={answer} />;
        })}
      </div>
    </section>
  );
};

export default FAQSection;
