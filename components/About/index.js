
import Image from 'next/image'

import { Container } from '../../styles/default';
import { DivImage } from './styles';

export default function About() {
  return (
    <Container
      id="about" 
      bg={'#E77A66'} 
      buttonBg={'#F6EEEB'} 
      buttonColor={'#E77A66'} 
      titleColor={'#010101'}
      contentColor={'#F6EEEB'}
    >
      <div>
        <strong>Sobre Nós</strong>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text 
          ever since the 1500s, when an unknown.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been.
        </p>
        <button>Learn More</button>
      </div>
      <DivImage> 
        <Image
          src="/assets/about-image.jpg"
          alt="Introdução"
          width={400}
          height={450}
          className="img"
        />
        <div className="circles">
          <Image
            src="/assets/circles.svg"
            alt="Introdução"
            width={108}
            height={108}
            
          />
        </div>
      </DivImage>
    </Container>
  )
}
