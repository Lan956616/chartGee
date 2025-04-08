import styles from "./graphTypeCard.module.css";
import Image from "next/image";

type GraphCardProps = {
  src: string;
  alt: string;
  label: string;
};

const GraphTypeCard: React.FC<GraphCardProps> = ({ src, alt, label }) => {
  return (
    <div className={styles.graphTypeCard}>
      <div className={styles.graphIcon}>
        <Image src={`/${src}.png`} alt={alt} width={100} height={100} />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default GraphTypeCard;
