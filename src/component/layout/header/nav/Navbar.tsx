import styles from "./Navbar.module.scss";
import { IoMdMenu } from "react-icons/io";
import ResponsiveNavbar from "./ResponsiveNavbar";
import useNavbarControl from "./useNavbarControl";

export default function Navbar() {
  const { toggleNavbar, open, NAVBAR_LINKS } = useNavbarControl();

  return (
    <>
      <IoMdMenu
        className={`${styles.header_item} ${styles.navbar_toggle}`}
        onClick={toggleNavbar}
      />

      {open && <ResponsiveNavbar NAVBAR_LINKS={NAVBAR_LINKS} handleClose={toggleNavbar} />}
      <nav className={`${styles.header_item} ${styles.navbar}`}>
        {NAVBAR_LINKS.map((link, i) => (
          <a href={link.href} key={i} className={styles.link} >
            {link.name}
          </a>
        ))}
      </nav>
    </>
  );
}
