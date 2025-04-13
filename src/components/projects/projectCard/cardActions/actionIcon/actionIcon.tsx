import Link from "next/link";
import Image from "next/image";
import styles from "./actionIcon.module.css";
type BaseProps = {
  src: string;
  alt: string;
  hint: string;
};

type LinkProps = BaseProps & {
  isLink: true;
  href: string;
  onClick?: never;
};

type ButtonProps = BaseProps & {
  isLink: false;
  onClick: () => void;
  href?: never;
};

type ActionIconProps = LinkProps | ButtonProps;

const ActionIcon: React.FC<ActionIconProps> = ({
  href,
  src,
  alt,
  isLink,
  onClick,
  hint,
}) => {
  return (
    <div className={styles.iconWrapper}>
      {isLink ? (
        <Link href={href} className={styles.actionIcon}>
          <Image src={src} alt={alt} width={25} height={25} />
        </Link>
      ) : (
        <button className={styles.actionIcon} onClick={onClick}>
          <Image src={src} alt={alt} width={25} height={25} />
        </button>
      )}
      <div className={styles.hint}>{hint}</div>
    </div>
  );
};

export default ActionIcon;
