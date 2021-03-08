
import Image from 'next/image'

import { Container } from '../../styles/default';
import { DivImage } from './styles';

export default function Location() {
  return (
    <Container 
      id="location"
      bg={'#FDE4DB'} 
      buttonBg={'#E77A66'} 
      buttonColor={'#F6EEEB'} 
      titleColor={'#010101'}
      contentColor={'#7A7A7A'}
      padding={'100px 10% 180px 10%'}
      paddingMobile={'34px 25px 160px 25px'}
    >
      <div>
        <strong>Visite nosso Salão</strong>
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
          src="/assets/salao-de-beleza.jpg"
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
