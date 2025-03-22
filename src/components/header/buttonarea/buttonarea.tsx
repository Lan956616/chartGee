import styles from "./buttonarea.module.css";
import Button from "@/components/button/button";

const ButtonArea: React.FC = () => {
  return (
    <div className={styles.buttonWrapper}>
      <Button className={styles.logBTN}>Log In</Button>
      <Button className={styles.signBTN}>Sign Up Free</Button>
      <Button className={styles.accountBTN}>My Account</Button>
    </div>
  );
};

export default ButtonArea;
