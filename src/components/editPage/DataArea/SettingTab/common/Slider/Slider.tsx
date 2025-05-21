import styles from "./slider.module.css";
type SliderProps = {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  unit: string;
};
const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  value,
  onChange,
  unit,
}) => {
  return (
    <div className={styles.sliderContainer}>
      <p>{label}</p>
      <div className={styles.rangeWrapper}>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className={styles.slider}
          onChange={(e) => {
            onChange(Number(e.target.value));
          }}
        />
        <p>{`${value}${unit}`}</p>
      </div>
    </div>
  );
};

export default Slider;
