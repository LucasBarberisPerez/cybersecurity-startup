import { useEffect, useState } from "react";
interface NavbarLink {
  name: string;
  href: string;
}
interface NavbarControlProps {
  toggleNavbar: () => void;
  open: boolean;
  NAVBAR_LINKS: NavbarLink[];
}

export default function useNavbarControl(): NavbarControlProps {
  const [open, setOpen] = useState(false);
  const NAVBAR_LINKS = [
    { name: "Sobre nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" },
  ];

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  };

  const handleBlockScroll = (shouldBlock: boolean) => {
    const body = document.getElementById("root")?.parentElement;
    if (body) {
      shouldBlock ? (body.style.overflow = "hidden") : (body.style.overflow = "auto");
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("resize", handleResize);
      handleBlockScroll(open);
    }
    return () => {
      console.log("limpiamos el componente");
      window.removeEventListener("resize", handleResize);
      handleBlockScroll(false);
    };
  }, [open]);

  return { toggleNavbar, open, NAVBAR_LINKS };
}
