import styles from "./textInput.module.css";
type TextInputProps = {
  label: string;
  value: string;
  onChange: (newUnit: string) => void;
};
const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <p>{label}</p>
      <input
        type="text"
        placeholder="kg , %"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onFocus={(e) => {
          e.currentTarget.select();
        }}
        className={styles.input}
      />
    </div>
  );
};

export default TextInput;
