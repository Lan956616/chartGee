"use client";
import { useState, useRef, useLayoutEffect } from "react";
import styles from "./colorSelect.module.css";
import ColorPicker from "./ColorPicker/ColorPicker";
import { calculateColorSelect } from "@/utils/editPage/calculatePosition";
import { useClickWheelOutside } from "@/hooks/useClickWheelOutside";
type SelectProps = {
  label: string;
  color: string;
  onChange: (newColor: string) => void;
};
const ColorSelect: React.FC<SelectProps> = ({ label, color, onChange }) => {
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  useLayoutEffect(() => {
    if (isPickerOpen) {
      setPosition(calculateColorSelect(boxRef.current));
    }
  }, [isPickerOpen]);
  useClickWheelOutside(pickerRef, boxRef, isPickerOpen, () => {
    setIsPickerOpen(false);
  });
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
          ref={boxRef}
        ></div>
        {isPickerOpen && position !== null && (
          <div
            className={styles.pickerWrapper}
            ref={pickerRef}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 9999,
            }}
          >
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
