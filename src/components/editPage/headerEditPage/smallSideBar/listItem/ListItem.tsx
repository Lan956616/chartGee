import styles from "./listItem.module.css";
import Image from "next/image";
import Link from "next/link";
type ListItemProps =
  | {
      src: string;
      hoverSrc: string;
      alt: string;
      children: React.ReactNode;
      href: string;
      onClick?: never;
    }
  | {
      src: string;
      hoverSrc: string;
      alt: string;
      children: React.ReactNode;
      onClick?: () => void;
      href?: never;
    };
const ListItem: React.FC<ListItemProps> = (props) => {
  const { src, hoverSrc, alt, children } = props;
  return (
    <li className={styles.listItemWrapper}>
      {props.href ? (
        <Link href={props.href} className={styles.listItem}>
          <div className={styles.iconWrapper}>
            <Image src={src} alt={alt} fill className={styles.icon} />
            <Image
              src={hoverSrc}
              alt={`${alt} hover`}
              fill
              className={styles.iconHover}
            />
          </div>
          <p>{children}</p>
        </Link>
      ) : (
        <button className={styles.listItem} onClick={props.onClick}>
          <div className={styles.iconWrapper}>
            <Image src={src} alt={alt} fill className={styles.icon} />
            <Image
              src={hoverSrc}
              alt={`${alt} hover`}
              fill
              className={styles.iconHover}
            />
          </div>
          <p>{children}</p>
        </button>
      )}
    </li>
  );
};

export default ListItem;
