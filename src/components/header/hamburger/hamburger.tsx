import styles from "./hamburger.module.css";
import Image from "next/image";
type HamburgerProps = {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};
const Hamburger: React.FC<HamburgerProps> = ({ isClicked, setIsClicked }) => {
  return (
    <div
      className={styles.hamburgerWrapper}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      {isClicked && (
        <Image src="/cross.png" alt="cross" width={20} height={20} />
      )}
      {!isClicked && (
        <Image src="/hamburger.png" alt="cross" width={20} height={20} />
      )}
    </div>
  );
};

export default Hamburger;
