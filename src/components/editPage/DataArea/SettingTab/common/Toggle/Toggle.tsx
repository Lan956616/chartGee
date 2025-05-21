import styles from "./toggle.module.css";
type ToggleProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};
const Toggle: React.FC<ToggleProps> = ({ label, active, onClick }) => {
  return (
    <div className={styles.toggleContainer}>
      <p>{label}</p>
      <div
        className={`${styles.toggle} ${active && styles.active}`}
        onClick={onClick}
      ></div>
    </div>
  );
};

export default Toggle;
