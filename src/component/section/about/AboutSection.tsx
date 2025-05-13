import styles from "./About.module.scss";
import info from "../../../info";
export default function AboutSection() {
  return (
    <section className={styles.about_section} id="about">
      <h1>Sobre {info.COMPANY_NAME}</h1>
      <div className={styles.content_inline}>
        <div className={styles.content_header}>
          <h2>Quiénes somos</h2>
        </div>
        <div className={styles.content_description}>
          <p>
            En <b>{info.COMPANY_NAME}</b>, somos líderes en soluciones de seguridad integrales,
            combinando la última tecnología con personal altamente capacitado para proteger lo que
            más valoras. Con sede en Galicia y operaciones en el resto de las comunidades autónomas,
            nuestra misión es garantizar tu tranquilidad mediante servicios especializados en
            seguridad digital, protección de inmuebles y escoltas personales, adaptándonos a las
            necesidades únicas de cada cliente.
          </p>
          <p>
            Con años de experiencia en el sector, nos enorgullece ofrecer un enfoque innovador que
            abarca desde la protección de tus datos más sensibles hasta la vigilancia física de tus
            propiedades y la seguridad personal en movimiento.
          </p>
        </div>
      </div>

      <div className={styles.content_group}>
        <div className={styles.content_down}>
          <div className={styles.content_header}>
            <h2>Nuestra filosofía</h2>
          </div>
          <div className={styles.content_description}>
            <p>
              Confianza y profesionalismo: cada miembro de nuestro equipo pasa por estrictos
              procesos de selección y capacitación. Nos aseguramos de cumplir con los más altos
              estándares de ética y desempeño. Tecnología de Vanguardia: Utilizamos las herramientas
              más avanzadas del mercado para proteger tu mundo físico y digital. Adaptabilidad:
              entendemos que cada cliente tiene necesidades diferentes. Diseñamos planes
              personalizados para garantizar una protección efectiva y eficiente.
            </p>
          </div>
        </div>

        <div className={styles.content_down}>
          <div className={styles.content_header}>
            <h2>Alcance geográfico</h2>
          </div>
          <div className={styles.content_description}>
            <p>
              Con una fuerte presencia en Galicia, nos enorgullece ofrecer nuestros servicios de
              seguridad en todo el territorio español. Nuestro compromiso es estar a tu lado, sin
              importar en qué comunidad autónoma te encuentres, para brindarte soluciones que se
              ajusten a tus necesidades de forma ágil y eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
