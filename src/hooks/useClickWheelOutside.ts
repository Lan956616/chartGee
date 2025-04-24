"use client";
import { useEffect } from "react";

export const useClickWheelOutside = (
  popUpRef: React.RefObject<HTMLElement>,
  ref: React.RefObject<HTMLElement>,
  isOpen: boolean,
  onClose: () => void
) => {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleClose = (event: MouseEvent | WheelEvent) => {
      if (
        popUpRef.current &&
        ref.current &&
        !popUpRef.current.contains(event.target as Node) &&
        !ref.current.contains(event.target as Node)
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
  }, [isOpen, onClose, popUpRef, ref]);
};
