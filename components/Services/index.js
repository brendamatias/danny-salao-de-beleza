
import Image from 'next/image'

import { Container } from '../../styles/default';
import { DivImage } from './styles';

export default function Services() {
  return (
    <Container 
      bg={'#F6EEEB'} 
      buttonBg={'#E77A66'} 
      buttonColor={'#F6EEEB'} 
      titleColor={'#010101'}
      contentColor={'#7A7A7A'}
      paddingMobile={'60px 25px 0 25px'}
    >
      <DivImage> 
        <Image
          src="/assets/servicos-image.jpg"
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
      <div>
        <strong>Nossos Serviços</strong>
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
    </Container>
  )
}
