"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./colorselect.module.css";
import ColorPicker from "../colorpicker/colorpicker";
type SelectProps = {
  label: string;
  color: string;
  onChange: (newColor: string) => void;
};
const ColorSelect: React.FC<SelectProps> = ({ label, color, onChange }) => {
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsPickerOpen(false);
      }
    }

    if (isPickerOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPickerOpen]);
  return (
    <>
      <div className={styles.selectWrapper}>
        <p>{label}</p>
        <div
          className={styles.colorBox}
          style={{ backgroundColor: `${color}` }}
          onClick={() => {
            setIsPickerOpen((prev) => !prev);
          }}
        ></div>
        {isPickerOpen && (
          <div className={styles.pickerWrapper} ref={pickerRef}>
            <ColorPicker
              color={color}
              onClick={(newColor) => {
                onChange(newColor);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ColorSelect;
