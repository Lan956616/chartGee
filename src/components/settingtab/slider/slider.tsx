import styles from "./slider.module.css";
type SliderProps = {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
};
const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  value,
  onChange,
}) => {
  return (
    <div className={styles.SliderContainer}>
      <p>{label}</p>
      <div className={styles.RangeWrapper}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className={styles.slider}
          onChange={(e) => {
            const newSize = Number(e.target.value);
            onChange(newSize);
          }}
        />
        <p>{`${value}px`}</p>
      </div>
    </div>
  );
};

export default Slider;
