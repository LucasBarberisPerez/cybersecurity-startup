import styles from "./Policies.module.scss";
import info from "../../../../../info"
export default function CookiesPolicy() {
  return (
    <>
      <section className={styles.policy_section}>
            <h2>Información General</h2>
            <p>En <strong>{info.COMPANY_NAME}</strong>, respetamos y protegemos la privacidad de nuestros usuarios. Esta política de privacidad explica cómo manejamos la información en nuestra página web, la cual utiliza exclusivamente un iframe de Google Maps para proporcionar acceso a mapas interactivos.</p>
        </section>
        <section className={styles.policy_section}>
            <h2>Información que Recopilamos</h2>
            <p>No recopilamos ninguna información personal de los usuarios que visitan nuestra página web. Sin embargo, el iframe de Google Maps integrado puede recopilar ciertos datos de los usuarios según los términos y políticas de Google.</p>
            <h3>Datos recopilados por Google Maps</h3>
            <p>El iframe de Google Maps puede recopilar información, incluyendo pero no limitado a:</p>
            <ul>
                <li>Datos de ubicación (si el usuario lo permite).</li>
                <li>Dirección IP del usuario.</li>
                <li>Información del navegador y dispositivo.</li>
            </ul>
            <p>Esta recopilación está regulada por la <a href="https://policies.google.com/privacy" target="_blank">Política de Privacidad de Google</a>.</p>
        </section>
        <section className={styles.policy_section}>
            <h2>Uso de Cookies</h2>
            <p>Nuestra página no utiliza cookies ni rastreadores propios. Sin embargo, Google Maps puede usar cookies para su funcionalidad. Te recomendamos revisar la <a href="https://policies.google.com/technologies/cookies" target="_blank">Política de Cookies de Google</a> para obtener más información.</p>
        </section>
        <section className={styles.policy_section}>
            <h2>Servicios de Terceros</h2>
            <p>El único servicio de terceros utilizado en nuestra página es Google Maps. Al interactuar con el iframe de Google Maps, aceptas estar sujeto a los términos y condiciones de Google, que puedes consultar aquí:</p>
            <ul>
                <li><a href="https://maps.google.com/help/terms_maps/" target="_blank">Términos de Servicio de Google Maps</a></li>
                <li><a href="https://policies.google.com/privacy" target="_blank">Política de Privacidad de Google</a></li>
            </ul>
        </section>
        <section className={styles.policy_section}>
            <h2>Seguridad de la Información</h2>
            <p>No almacenamos, procesamos ni compartimos datos personales de los usuarios en nuestra página web. Sin embargo, recuerda que la interacción con Google Maps está sujeta a las medidas de seguridad implementadas por Google.</p>
        </section>
        <section className={styles.policy_section}>
            <h2>Enlaces Externos</h2>
            <p>Nuestra página puede contener enlaces a otras páginas web. No somos responsables de las prácticas de privacidad ni del contenido de dichos sitios externos. Te recomendamos leer sus respectivas políticas de privacidad.</p>
        </section>
        <section className={styles.policy_section}>
            <h2>Cambios en esta Política</h2>
            <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio.</p>
        </section>
        <section className={styles.policy_section}>
            <h2>Contacto</h2>
            <p>Si tienes alguna pregunta sobre esta política de privacidad, puedes ponerte en contacto con nosotros a través de {info.EMAIL_INFO}.</p>
            <p>Fecha de última actualización: <strong>29 de diciembre de 2024</strong></p>
        </section>
        </>
  )
}
