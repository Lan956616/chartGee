import styles from "./button.module.css";
import Image from "next/image";
type ButtonProps = {
  children: React.ReactNode;
  width?: number;
  src?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  width,
  src,
  onClick,
  className,
}) => {
  const btnStyle = {
    ...(width && { width: `${width}%` }),
  };
  return (
    <button
      className={`${styles.btn} ${className || ""}`}
      style={btnStyle}
      onClick={onClick}
    >
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
