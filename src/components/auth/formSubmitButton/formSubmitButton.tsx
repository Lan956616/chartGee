import styles from "./formSubmitButton.module.css";
import Image from "next/image";
type FormSubmitButtonProps = { isLoading: boolean; label: string };
const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  isLoading,
  label,
}) => {
  return (
    <>
      <button type="submit" className={styles.submitBTN} disabled={isLoading}>
        {isLoading && (
          <Image
            src="/load.png"
            alt="loading-spinner"
            width={20}
            height={20}
            className={styles.loadIcon}
          />
        )}
        {label}
      </button>
    </>
  );
};

export default FormSubmitButton;
