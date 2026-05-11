"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Login from "./index"; // your existing Login component
import styles from "./loginModal.module.scss";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}          // click backdrop → close
      role="dialog"
      aria-modal="true"
      aria-label="Login modal"
    >
      {/* Stop click propagation so clicking the card doesn't close */}
      <div
        className={styles.modalWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        {/* Your existing Login component — zero changes needed */}
        <Login />
      </div>
    </div>,
    document.body
  );
}