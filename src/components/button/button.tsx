import styles from "./button.module.css";
type ButtonProps = {
  children: React.ReactNode;
  color: "white" | "blue";
  width?: number;
};

const Button: React.FC<ButtonProps> = ({ children, color, width }) => {
  const btnStyle = {
    backgroundColor: color === "white" ? "white" : "#3d92e7",
    width: width ? `${width}%` : undefined,
    color: color === "blue" ? "white" : undefined,
  };
  return (
    <button className={styles.btn} style={btnStyle}>
      {children}
    </button>
  );
};

export default Button;
