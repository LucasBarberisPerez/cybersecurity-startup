import styles from "./Footer.module.scss";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import contactInfo from "../../../info";
import LegalInfo from "./info/LegalInfo";

export default function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <LegalInfo/>
        <div className={styles.footer_info}>
          <h2>Redes sociales</h2>
          <div className={styles.footer_social}>
            <a href={contactInfo.FACEBOOK_URL} target="_blank" className={styles.social_link}>
              <FaFacebookSquare />
            </a>
            <a href={contactInfo.INSTAGRAM_URL} target="_blank" className={styles.social_link}>
              <FaSquareInstagram />
            </a>
            <a href={contactInfo.TWITTER_URL} target="_blank" className={styles.social_link}>
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
        <div className={styles.footer_info}>
          <h2>Contáctanos</h2>
          <a href={`mailto:${contactInfo.EMAIL_INFO}`} className={styles.footer_button}>
            Escríbenos
          </a>
          <a
            href={`tel:${contactInfo.PHONE_INFO.split(" ").join("")}`}
            className={styles.footer_button}
          >
            Llámanos
          </a>
        </div>
      </div>
      <p className={styles.footer_copyright}>
        © {year} {contactInfo.COMPANY_NAME}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
