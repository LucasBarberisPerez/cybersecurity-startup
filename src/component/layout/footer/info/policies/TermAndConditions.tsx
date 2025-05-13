import info from "../../../../../info"
import styles from "./Policies.module.scss";
export default function TermAndConditions() {
  return (
    <>
    <section className={styles.policy_section}>
        <h2>Introducción</h2>
        <p>Bienvenido a <strong>{info.COMPANY_NAME}</strong>. Al acceder o utilizar nuestra página web, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de los términos aquí establecidos, te pedimos que no utilices nuestra página.</p>
    </section>
    <section className={styles.policy_section}>
        <h2>Acceso al Sitio</h2>
        <p>Garantizamos que el acceso a la página sea seguro y funcional en todo momento, pero no somos responsables si la página deja de estar disponible temporalmente debido a problemas técnicos o de mantenimiento.</p>
    </section>
    <section className={styles.policy_section}>
        <h2>Uso Permitido</h2>
        <p>Se prohíbe cualquier uso indebido de la página, incluyendo, pero no limitado a:</p>
        <ul>
            <li>Utilizarla para fines ilegales o fraudulentos.</li>
            <li>Introducir virus, troyanos o cualquier otro software malicioso.</li>
            <li>Intentar acceder a áreas restringidas de la página sin autorización.</li>
        </ul>
    </section>
    <section className={styles.policy_section}>
        <h2>Propiedad Intelectual</h2>
        <p>Todo el contenido de esta página, incluyendo textos, imágenes y diseño, está protegido por derechos de autor. No está permitido copiar, distribuir ni modificar ninguno de estos materiales sin nuestra autorización previa y por escrito.</p>
    </section>
    <section className={styles.policy_section}>
        <h2>Limitación de Responsabilidad</h2>
        <p>No asumimos ninguna responsabilidad por daños directos, indirectos o incidentales que puedan surgir del uso o la imposibilidad de uso de la página, incluso si se nos ha informado de la posibilidad de dichos daños.</p>
        <p>El uso de Google Maps está sujeto a los términos de uso y políticas de privacidad de Google, que puedes consultar <a href="https://maps.google.com/help/terms_maps/" target="_blank">aquí</a>.</p>
    </section>
    <section className={styles.policy_section}>
        <h2>Modificaciones a los Términos</h2>
        <p>Nos reservamos el derecho de actualizar o modificar estos términos en cualquier momento. Las actualizaciones serán publicadas en esta página, y el uso continuado del sitio implicará la aceptación de dichos cambios.</p>
    </section>
    <section className={styles.policy_section}>
        <h2>Jurisdicción</h2>
        <p>Estos términos y condiciones se rigen por las leyes aplicables del país donde operamos. Cualquier disputa relacionada con el uso de esta página será resuelta en los tribunales correspondientes.</p>
    </section>
    <section className={styles.policy_section}>
        <h2>Contacto</h2>
        <p>Si tienes preguntas sobre estos términos, puedes comunicarte con nosotros a través del correo {info.EMAIL_INFO}.</p>
        <p>Fecha de última actualización: <strong>29 de diciembre de 2024</strong></p>
    </section>
</>

  )
}
