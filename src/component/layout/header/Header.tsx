import styles from "./Header.module.scss";
import Navbar from "./nav/Navbar";
import info from "../../../info";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
          <img src="logo-lorem.svg" alt="Logo sin fondo" className={styles.header_item} />
          <h1 className={styles.header_item}>{info.COMPANY_NAME}</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
