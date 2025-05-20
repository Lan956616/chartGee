import styles from "./selectDropDown.module.css";
type SelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  width: number;
};
const SelectDropDown: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  width,
}) => {
  return (
    <div className={styles.selectContainer}>
      <p>{label}</p>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: `${width}px` }}
      >
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value} className={styles.option}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SelectDropDown;
