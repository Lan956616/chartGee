"use client";
import { createPortal } from "react-dom";
import { useState, useRef, useLayoutEffect } from "react";
import styles from "./colorbox.module.css";
import ColorPicker from "@/components/settingtab/colorpicker/colorpicker";
import { calculateColorBox } from "@/utils/calculatePosition";
import { useClickWheelOutside } from "@/hooks/useClickWheelOutside";
type ColorBoxProps = { color: string; onChange: (newColor: string) => void };
const ColorBox: React.FC<ColorBoxProps> = ({ color, onChange }) => {
  const [isBoxClicked, setIsBoxClicked] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const BoxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (isBoxClicked) {
      setPosition(calculateColorBox(BoxRef.current));
    }
  }, [isBoxClicked]);
  useClickWheelOutside(pickerRef, BoxRef, isBoxClicked, () => {
    setIsBoxClicked(false);
  });
  return (
    <>
      <div
        className={styles.colorBox}
        style={{ backgroundColor: color }}
        onClick={() => {
          setIsBoxClicked((prev) => !prev);
        }}
        ref={BoxRef}
      ></div>
      {isBoxClicked &&
        position &&
        createPortal(
          <div
            className={styles.pickerWrapper}
            ref={pickerRef}
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
          >
            <ColorPicker
              color={color}
              onClick={(newColor) => {
                onChange(newColor);
              }}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default ColorBox;
