import styles from "./errorMessage.module.css";
type ErrorMessageProps = { error: string };
const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <>{error && <p className={styles.error}>{error}</p>}</>;
};

export default ErrorMessage;
