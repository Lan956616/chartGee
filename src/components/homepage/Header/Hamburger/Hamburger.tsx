import styles from "./hamburger.module.css";
import Image from "next/image";
import NavbarSmall from "../NavbarSmall/NavbarSmall";
type HamburgerProps = {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};
const Hamburger: React.FC<HamburgerProps> = ({ isClicked, setIsClicked }) => {
  return (
    <>
      <div
        className={styles.hamburgerWrapper}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        {isClicked && (
          <Image src="/icons/cross.png" alt="cross" width={20} height={20} />
        )}
        {!isClicked && (
          <Image
            src="/icons/hamburger.png"
            alt="cross"
            width={20}
            height={20}
          />
        )}
      </div>
      <NavbarSmall isClicked={isClicked} />
    </>
  );
};

export default Hamburger;
