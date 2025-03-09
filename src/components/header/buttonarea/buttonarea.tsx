import styles from "./buttonarea.module.css";
import Button from "@/components/button/button";

const ButtonArea: React.FC = () => {
  return (
    <div className={styles.buttonWrapper}>
      <Button color="white">Log In</Button>
      <Button color="blue">Sign Up Free</Button>
      <Button color="blue">My Account</Button>
    </div>
  );
};

export default ButtonArea;
