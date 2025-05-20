import Image from "next/image";
import styles from "./listItem.module.css";
import Link from "next/link";
type ListItemProps =
  | {
      children: React.ReactNode;
      side: "right" | "down";
      onClick: () => void;
      href?: never;
    }
  | {
      children: React.ReactNode;
      side: "right" | "down";
      href: string;
      onClick?: never;
    };
const ListItem: React.FC<ListItemProps> = ({
  children,
  side,
  onClick,
  href,
}) => {
  const content = (
    <>
      <p>{children}</p>
      {side === "right" && (
        <div className={styles.imageWrapper}>
          <Image
            src="/arrows/right-arrow.png"
            alt="right-arrow"
            fill
            className={styles.listItemImg}
          />
          <Image
            src="/arrows/blue-right-arrow.png"
            alt="right-arrow"
            fill
            className={styles.hoverImg}
          />
        </div>
      )}
      {side === "down" && (
        <div className={styles.imageWrapper}>
          <Image
            src="/arrows/down-arrow.png"
            alt="down-arrow"
            fill
            className={styles.listItemImg}
          />
          <Image
            src="/arrows/blue-down-arrow.png"
            alt="down-arrow"
            fill
            className={styles.hoverImg}
          />
        </div>
      )}
    </>
  );
  if (onClick) {
    return (
      <li className={styles.listItem} onClick={onClick}>
        {content}
      </li>
    );
  }
  return (
    <Link href={href} className={styles.listItem}>
      {content}
    </Link>
  );
};

export default ListItem;
