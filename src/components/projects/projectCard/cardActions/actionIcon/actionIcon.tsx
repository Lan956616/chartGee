import Link from "next/link";
import Image from "next/image";
import styles from "./actionIcon.module.css";
type ActionIconProps = {
  href: string;
  src: string;
  alt: string;
};
const ActionIcon: React.FC<ActionIconProps> = ({ href, src, alt }) => {
  return (
    <Link href={href} className={styles.actionIcon}>
      <Image src={src} alt={alt} width={25} height={25} />
    </Link>
  );
};

export default ActionIcon;
