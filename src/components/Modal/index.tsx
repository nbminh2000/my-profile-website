import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
  onRequestClose: () => void;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEsc?: boolean;
  closeTimeoutMS?: number;
  overlayClassName?: string;
  className?: string;
  bodyOpenClassName?: string;
  htmlOpenClassName?: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,

  closeTimeoutMS = 0,
  overlayClassName = "",
  className = "",
  bodyOpenClassName = "",
  htmlOpenClassName = "",

  children,
}: ModalProps) {
  const [visible, setVisible] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      onAfterOpen && onAfterOpen();

      if (bodyOpenClassName) {
        document.body.classList.add(bodyOpenClassName);
      }

      if (htmlOpenClassName) {
        document.documentElement.classList.add(htmlOpenClassName);
      }

      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape" && shouldCloseOnEsc) {
          handleClose();
        }
      };

      window.addEventListener("keydown", handleEsc);

      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    } else {
      handleClose();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (closeTimeoutMS > 0) {
      setClosing(true);

      setTimeout(() => {
        setClosing(false);
        setVisible(false);
        cleanup();
      }, closeTimeoutMS);
    } else {
      setVisible(false);
      cleanup();
    }
  };

  const cleanup = () => {
    if (bodyOpenClassName) {
      document.body.classList.remove(bodyOpenClassName);
    }

    if (htmlOpenClassName) {
      document.documentElement.classList.remove(htmlOpenClassName);
    }

    onAfterClose && onAfterClose();
  };

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${overlayClassName} ${closing ? styles.closing : ""}`}
      onClick={() => {
        if (shouldCloseOnOverlayClick) onRequestClose();
      }}
    >
      <div
        className={`${styles.modal} ${className} ${closing ? styles.closing : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}