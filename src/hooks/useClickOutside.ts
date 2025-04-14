"use client";
import { useEffect } from "react";
import type { RefObject } from "react";
export const useClickOutside = (
  popupRef: RefObject<HTMLElement>,
  onClose: () => void
) => {
  useEffect(() => {
    const handleClose = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.body.addEventListener("click", handleClose);
    return () => {
      document.body.removeEventListener("click", handleClose);
    };
  }, [popupRef, onClose]);
};
