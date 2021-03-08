import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { Content } from './styles';
import { IoLogoFacebook, IoLogoInstagram, IoClose, IoMenu } from 'react-icons/io5';

export default function Header() {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && !scroll) {
      setScroll(true)
    }

    if (window.scrollY === 0 && scroll) {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Content>
      <ul className={click ? "header-links header-active" : "header-links"}>
        <li className={router.asPath === "/#introduction" ? "link-active" : ""} onClick={closeMobileMenu}>
          <Link href="#introduction">
            Início
          </Link>
        </li>
        <li className={router.asPath === "/#about" ? "link-active" : ""} onClick={closeMobileMenu}>
          <Link href="#about">
            Sobre
          </Link>
        </li>
        <li className={router.asPath === "/#services" ? "link-active" : ""}  onClick={closeMobileMenu}>
          <Link href="#services">
            Serviços
          </Link>
        </li>
        <li className={router.asPath === "/#location" ? "link-active" : ""}  onClick={closeMobileMenu}>
          <Link href="#location">
            Localização
          </Link>
        </li>
        <li className={router.asPath === "/#contact" ? "link-active" : ""}  onClick={closeMobileMenu}>
          <Link href="#contact">
            Contato
          </Link>
        </li>
      </ul>

      <div className={scroll ? "mobile-menu menu-scroll-active" : "mobile-menu"}  onClick={handleClick}>
        {click ? (
          <IoClose className="menu-icon" size={20}/>
        ) : (
          <IoMenu className="menu-icon" size={20} />
        )}
      </div>

      <ul className="header-icons">
        <li className="header-icons_facebook">
          <a href="https://www.facebook.com/DannyCFontoura/">
            <IoLogoFacebook />
          </a>
        </li> 
        <li>
          <a href="https://www.instagram.com/dannycfontoura/">
            <IoLogoInstagram />
          </a>
        </li> 
      </ul>
    </Content>
  )
}
