import React, { useState } from "react";
import styles from "../Footer.module.scss";
import PopUp from "../../../common/PopUp";
import CookiesPolicy from "./policies/CookiesPolicy";
import TermAndConditions from "./policies/TermAndConditions";

export default function LegalInfo() {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<React.ReactNode>(null);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);
    const handleClick = (component: React.ReactNode) => {
        handleOpen();
        setContent(component);
    }
  return (
    <div className={styles.footer_info}>
      <h2>Información</h2>
      <button onClick={()=>{handleClick(<CookiesPolicy/>)}} className={styles.text_link}>Política de privacidad</button>
      <button onClick={()=>{handleClick(<TermAndConditions/>)}} className={styles.text_link}>Términos y condiciones</button>
      {isOpen && content && <PopUp handleClose={handleClose} children={content} />}
    </div>
  );
}
