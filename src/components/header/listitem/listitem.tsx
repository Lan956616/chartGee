import Image from "next/image";
import styles from "./listitem.module.css";
type ListItemProps = {
  children: React.ReactNode;
  side: "right" | "down";
};
const ListItem: React.FC<ListItemProps> = ({ children, side }) => {
  return (
    <li className={styles.listItem}>
      <p>{children}</p>
      {side === "right" && (
        <Image
          src="/right-arrow.png"
          alt="right-arrow"
          width={15}
          height={15}
          className={styles.listItemImg}
        />
      )}
      {side === "down" && (
        <Image
          src="/down-arrow.png"
          alt="down-arrow"
          width={15}
          height={15}
          className={styles.listItemImg}
        />
      )}
    </li>
  );
};

export default ListItem;
