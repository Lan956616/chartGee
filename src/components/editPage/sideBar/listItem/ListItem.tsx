import styles from "./listItem.module.css";
import Link from "next/link";
import Image from "next/image";
type ListItemProps =
  | {
      href: string;
      src: string;
      alt: string;
      children: React.ReactNode;
      lightMode?: boolean;
      onClick?: never;
    }
  | {
      href?: never;
      src: string;
      alt: string;
      children: React.ReactNode;
      lightMode?: boolean;
      onClick?: () => void;
    };
const ListItem: React.FC<ListItemProps> = (props) => {
  const { src, alt, children } = props;
  return (
    <li className={`${styles.listItem} ${props.lightMode && styles.lightMode}`}>
      {props.href ? (
        <Link href={props.href} className={styles.itemWrapper}>
          <Image src={src} alt={alt} width={30} height={30} />
          <p>{children}</p>
        </Link>
      ) : (
        <button onClick={props.onClick} className={styles.itemWrapper}>
          <Image src={src} alt={alt} width={30} height={30} />
          <p>{children}</p>
        </button>
      )}
    </li>
  );
};

export default ListItem;
