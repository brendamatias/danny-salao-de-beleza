
import { Content } from './styles';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

export default function Header() {
  return (
    <Content>
      <ul className="header-links">
        <li className="active">
          <a href="#introduction">Início</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#location">Localização</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

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
