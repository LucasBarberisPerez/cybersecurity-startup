import { useEffect } from "react";
import styles from "./PopUp.module.scss";
import { IoCloseCircle } from "react-icons/io5";

interface PopUpProps {
  children: React.ReactNode;
  handleClose?: () => void;
}

export default function PopUp({ children, handleClose }: PopUpProps) {
  useEffect(() => {
    const body = document.getElementById("root")?.parentElement;
    if (body) {
      body.style.overflow = "hidden";
    }
    return () => {
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, []);

  return (
    <div className={styles.popup_container}>
      <div className={styles.popup_header}>
       <IoCloseCircle onClick={handleClose}/>
      </div>
      <div className={styles.popup_body}>{children}</div>
    </div>
  );
}
