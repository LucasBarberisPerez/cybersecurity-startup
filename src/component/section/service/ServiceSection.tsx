import styles from "./Service.module.scss";
import { MdSecurity } from "react-icons/md";
import { SiCyberdefenders } from "react-icons/si";
import { GiPoliceOfficerHead } from "react-icons/gi";
export default function ServiceSection() {
  return (
    <section className={styles.service_section} id="services">
      <h1>Nuestros servicios</h1>
      <div className={styles.service_category}>
        <SiCyberdefenders className={styles.service_icon} />
        <h2>Ciberseguridad</h2>
        <p>Protegemos tu privacidad y te ayudamos a prevenir ciberacoso.</p>
        <p>Servicios especializados en rastreo y mitigación de acoso digital.</p>
        <p>Ciberseguridad enfocada en protegerte frente a amenazas personales en línea.</p>
      </div>
      <div className={styles.service_category}>
        <MdSecurity className={styles.service_icon} />
        <h2>Vigilancia</h2>
        <p>Supervisión constante para garantizar la seguridad de tus espacios.</p>
        <p>Tecnología avanzada y personal capacitado para proteger lo que más importa.</p>
        <p>Vigilancia activa 24/7 para mantener todo bajo control.</p>
      </div>

      <div className={styles.service_category}>
        <GiPoliceOfficerHead className={styles.service_icon} />
        <h2>Escoltas particulares</h2>
        <p>Protección personalizada para garantizar tu tranquilidad y seguridad.</p>
        <p>Escoltas profesionales, discretos y confiables a tu servicio.</p>
        <p>Cuidamos de ti y de los tuyos con atención exclusiva y profesionalismo.</p>
      </div>
    </section>
  );
}
