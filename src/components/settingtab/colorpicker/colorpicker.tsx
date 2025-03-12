"use client";
import styles from "./colorpicker.module.css";

const colorPalette = [
  "#000000",
  "#4A4A4A",
  "#6F6F6F",
  "#A0A0A0",
  "#D9D9D9",
  "#FFFFFF",
  "#E74C3C",
  "#EC7063",
  "#E573C2",
  "#B87FDB",
  "#8E44AD",
  "#5E33D1",
  "#3498DB",
  "#5DADE2",
  "#82E0AA",
  "#7FB3D5",
  "#4D69C3",
  "#1E3799",
  "#2ECC71",
  "#58D68D",
  "#ABEBC6",
  "#F7DC6F",
  "#F4A261",
  "#E67E22",
];
type PickerProps = {
  color: string;
  onClick: (each: string) => void;
};
const ColorPicker: React.FC<PickerProps> = ({ color, onClick }) => {
  return (
    <div className={styles.pickerContainer}>
      {colorPalette.map((each) => {
        return (
          <div
            key={each}
            className={`${styles.color} ${
              color === each ? styles.selected : ""
            }`}
            style={{ backgroundColor: `${each}` }}
            onClick={() => onClick(each)}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorPicker;
