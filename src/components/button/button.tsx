import styles from "./button.module.css";
import Image from "next/image";
type ButtonProps = {
  children: React.ReactNode;
  color: "white" | "blue";
  width?: number;
  src?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  width,
  src,
  onClick,
}) => {
  const btnStyle = {
    backgroundColor: color === "white" ? "white" : "#3d92e7",
    width: width ? `${width}%` : undefined,
    color: color === "blue" ? "white" : undefined,
  };
  return (
    <button className={styles.btn} style={btnStyle} onClick={onClick}>
      {src && (
        <Image
          src={src}
          alt="button icon"
          width={25}
          height={25}
          className={styles.btnImg}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
