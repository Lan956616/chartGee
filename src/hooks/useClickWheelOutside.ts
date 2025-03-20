"use client";
import { useEffect } from "react";

export const useClickWheelOutside = (
  pickerRef: React.RefObject<HTMLElement>,
  boxRef: React.RefObject<HTMLElement>,
  isOpen: boolean,
  onClose: () => void
) => {
  useEffect(() => {
    const handleClose = (event: MouseEvent | WheelEvent) => {
      if (
        pickerRef.current &&
        boxRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
        !boxRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.addEventListener("click", handleClose);
      document.body.addEventListener("wheel", handleClose);
    }
    return () => {
      document.body.removeEventListener("click", handleClose);
      document.body.removeEventListener("wheel", handleClose);
    };
  }, [isOpen, onClose, pickerRef, boxRef]);
};
