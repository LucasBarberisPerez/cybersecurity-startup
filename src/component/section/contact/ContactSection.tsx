import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaInfoCircle } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import CONTACT_INFO from "../../../info";
export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact_section}>
      <h1>Contacto</h1>
      <div className={styles.contact_info}>
        <div className={styles.contact_description}>
          <h2>Nuestras oficinas</h2>
          <p>
            Actualmente estamos ubicados en <b>Madrid</b>, pero operamos a nivel nacional. Si no
            estas segur@ de la zona de tu interés, no dudes en ponerte en contacto con nosotros.
          </p>
          <div className={styles.contact_description_info}>
            <div className={styles.contact_description_info_header}>
              <h3>Información de contacto</h3>
              <FaInfoCircle />
            </div>

            <span>
              <IoLocation />
              <p>{CONTACT_INFO.LOCATION_INFO}</p>
            </span>
            <span>
              <MdEmail />
              <p>{CONTACT_INFO.EMAIL_INFO}</p>
            </span>
            <span>
              <FaPhoneAlt /> <p>{CONTACT_INFO.PHONE_INFO}</p>
            </span>
          </div>
          <div className={styles.contact_description_info}>
            <div className={styles.contact_description_info_header}>
              <h3>Horarios de atención</h3>
              <FaClock />
            </div>
            <ul className={styles.contact_schedule_list}>
              <li>
                De <b>lunes a viernes</b> de <time>9:00</time> a <time>18:00</time>.
              </li>
              <li>
                Los <b>sábados</b> de <time>9:00</time> a <time>12:00</time>.
              </li>
            </ul>
          </div>
        </div>
        <iframe
          title="Mapa de ubicación de oficinas de Lug & Reva Security"
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.2107296953254!2d-3.6942975517652608!3d40.42024562960648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422884b69894d3%3A0x42597193d8bd3e47!2sPlaza%20Cibeles%2C%20Centro%2C%2028014%20Madrid!5e0!3m2!1ses!2ses!4v1747159463223!5m2!1ses!2ses"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          lang="es"
        />
      </div>
    </section>
  );
}
