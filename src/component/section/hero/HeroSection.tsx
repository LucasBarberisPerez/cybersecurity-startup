import styles from "./Hero.module.scss";
export default function HeroSection() {
  return (
    <section className={styles.hero_section} >
      <div className={styles.hero_header}>
        <div className={styles.hero_header_info}>
          <h1>Tu seguridad total en un solo lugar.</h1>
          <p>
            Garantizamos tu tranquilidad con soluciones de ciberseguridad, vigilancia y protección de inmuebles
            adaptadas a tus necesidades.
          </p>
          <a href="#services" className={styles.hero_header_button}>Descubre nuestros servicios</a>
        </div>
        <img src="logo-lorem.svg" alt="Logo principal" className={styles.hero_image} />
      </div>
    </section>
  );
}
