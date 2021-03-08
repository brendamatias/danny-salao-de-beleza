
import Image from 'next/image'

import Header from '../Header'
import { IntroductionContent } from './styles';

export default function Introduction() {
  return (
    <IntroductionContent id="introduction">
      <Image
        src="/assets/home-bg.png"
        alt="Introdução"
        width={500}
        height={500}
      /> 
      <div>
        <Header />
        <div>
          <strong>Lorem Ipsum is simply lorem</strong>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been.
          </p>
          <button>marcar um horário</button>
        </div>
      </div>
    </IntroductionContent>
  )
}
