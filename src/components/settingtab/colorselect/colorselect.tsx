"use client";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "./colorselect.module.css";
import ColorPicker from "../colorpicker/colorpicker";
import { calculatePosition } from "@/utils/calculatePosition";
type SelectProps = {
  label: string;
  color: string;
  onChange: (newColor: string) => void;
};
const ColorSelect: React.FC<SelectProps> = ({ label, color, onChange }) => {
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const BoxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (isPickerOpen) {
      setPosition(calculatePosition(BoxRef.current));
    }
  }, [isPickerOpen]);

  useEffect(() => {
    function handleClose(event: MouseEvent | WheelEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsPickerOpen(false);
      }
    }

    if (isPickerOpen) {
      document.addEventListener("click", handleClose);
      document.addEventListener("wheel", handleClose);
    }

    return () => {
      document.removeEventListener("click", handleClose);
      document.removeEventListener("wheel", handleClose);
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
          ref={BoxRef}
        ></div>
        {isPickerOpen && position !== null && (
          <div
            className={styles.pickerWrapper}
            ref={pickerRef}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 1000,
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
