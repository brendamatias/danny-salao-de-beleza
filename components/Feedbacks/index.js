
import Image from 'next/image'

import { Container } from './styles';

export default function Feedbacks() {
  return (
    <Container id="feedbacks">
      <div>
        <Image
          src="/assets/feedbacks-imgs.png"
          alt="Introdução"
          width={800}
          height={428}
        />
        <strong>Feedbacks</strong>
        <ul>
          <li>
            <div>
              <Image
                src="/assets/feedback-header.svg"
                alt="Introdução"
                width={35}
                height={24}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer.
              </p>
            </div>

            <div className="feedback-user">
              <div></div>
              <div>
                <strong>Brenda Matias</strong>
                <span>Cliente</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <Image
                src="/assets/feedback-header.svg"
                alt="Introdução"
                width={35}
                height={24}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer.
              </p>
            </div>

            <div className="feedback-user">
              <div></div>
              <div>
                <strong>Brenda Matias</strong>
                <span>Cliente</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <Image
                src="/assets/feedback-header.svg"
                alt="Introdução"
                width={35}
                height={24}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer.
              </p>
            </div>

            <div className="feedback-user">
              <div></div>
              <div>
                <strong>Brenda Matias</strong>
                <span>Cliente</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  )
}
