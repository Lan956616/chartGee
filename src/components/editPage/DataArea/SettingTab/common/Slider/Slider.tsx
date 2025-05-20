import styles from "./slider.module.css";
type SliderProps = {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  Unit: string;
};
const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  value,
  onChange,
  Unit,
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
            const newSize = Number(e.target.value);
            onChange(newSize);
          }}
        />
        <p>{`${value}${Unit}`}</p>
      </div>
    </div>
  );
};

export default Slider;
