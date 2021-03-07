
import Image from 'next/image'

import { Container } from './styles';
import { ImPhone } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <Container>
      <div className="footer-top">
        <div className="img">
          <Image
            src="/assets/logo-white.svg"
            alt="Introdução"
            width={192.83}
            height={105}
          />
        </div>
          
          
        <ul>
          <li>
            <strong>Links Rápidos</strong>
            <hr />
            <span><a href="#introduction">Introdução</a></span>
            <span><a href="#about">Sobre Nós</a></span>
            <span><a href="#services">Nossos Serviços</a></span>
            <span><a href="#location">Visite nosso Salão</a></span>
            <span><a href="#feedbacks">Feedbacks</a></span>
          </li>
          <li>
            <strong>Localização</strong>
            <hr />
            <span>Rua Emílio Prioto, 147, São Pelegrino</span>
            <span>95330-000</span>
            <span>Veranópolis-RS</span>
          </li>
          <li>
            <strong>Contato</strong>
            <hr />
            <span><ImPhone /> (54) 99134-3009</span>
            <span><IoLogoWhatsapp /> (54) 99607-1463</span>
            <span><MdEmail /> email@email.com</span>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <hr />
        <span>Copyright 2021 - Todos os direitos reservados à Brenda Matias</span>
      </div>
    </Container>
  )
}
