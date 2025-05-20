"use client";
import { createPortal } from "react-dom";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import styles from "./colorBox.module.css";
import ColorPicker from "../../settingTab/common/colorSelect/colorPicker/ColorPicker";
import { calculateColorBox } from "@/utils/editPage/calculatePosition";
import { useClickWheelOutside } from "@/hooks/useClickWheelOutside";
type ColorBoxProps = { color: string; onChange: (newColor: string) => void };
const ColorBox: React.FC<ColorBoxProps> = ({ color, onChange }) => {
  const [isBoxClicked, setIsBoxClicked] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const BoxRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setHasMounted(true);
  }, []);
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
      {hasMounted &&
        isBoxClicked &&
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
