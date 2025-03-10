import styles from "./listitem.module.css";
import Link from "next/link";
import Image from "next/image";
type ListItemProps = {
  href: string;
  src: string;
  alt: string;
  children: React.ReactNode;
};
const ListItem: React.FC<ListItemProps> = ({ href, src, alt, children }) => {
  return (
    <li className={styles.listItem}>
      <Link href={href} className={styles.itemWrapper}>
        <Image src={src} alt={alt} width={30} height={30} />
        <p>{children}</p>
      </Link>
    </li>
  );
};

export default ListItem;
