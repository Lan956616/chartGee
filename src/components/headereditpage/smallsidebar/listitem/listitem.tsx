import styles from "./listitem.module.css";
import Image from "next/image";
import Link from "next/link";
type ListItemProps = {
  children: React.ReactNode;
  src: string;
  alt: string;
  href: string;
};
const ListItem: React.FC<ListItemProps> = ({ children, src, alt, href }) => {
  return (
    <li className={styles.listItemWrapper}>
      <Link href={href} className={styles.listItem}>
        <Image src={src} alt={alt} width={25} height={25} />
        <p>{children}</p>
      </Link>
    </li>
  );
};

export default ListItem;
