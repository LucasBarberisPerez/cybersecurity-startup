import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.scss";

interface ResponsiveNavbarProps {
  handleClose: () => void;
  NAVBAR_LINKS: { name: string; href: string }[];
}
export default function ResponsiveNavbar({ handleClose, NAVBAR_LINKS }: ResponsiveNavbarProps) {
  return (
    <nav className={styles.responsive_navbar}>
      <div className={styles.responsive_navbar_header}>
        <div className={styles.responsive_navbar_brand}>
          <h2 className={styles.header_item}>Navegación</h2>
        </div>
        <IoMdClose className={styles.navbar_close} onClick={handleClose} />
      </div>
      <div className={styles.responsive_navbar_links}>
        {NAVBAR_LINKS.map((link, i) => (
          <a href={link.href} key={i} className={styles.link} onClick={handleClose}>
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
