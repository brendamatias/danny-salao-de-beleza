import { useState, useEffect } from 'react';
import { Content } from './styles';
import { IoLogoFacebook, IoLogoInstagram, IoClose, IoMenu } from 'react-icons/io5';

export default function Header() {
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
        <li onClick={closeMobileMenu}>
          <a href="#introduction">Início</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="#about">Sobre</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="#services">Serviços</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="#location">Localização</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="#contact">Contato</a>
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
