import GlobalStyle from '../styles/global';

import Introduction from '../components/Introduction'
import About from '../components/About'
import Services from '../components/Services'
import Location from '../components/Location'
import Feedbacks from '../components/Feedbacks'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <> 
      <GlobalStyle />
      <Introduction id="introduction" />
      <About id="about" />
      <Services id="services" />
      <Location id="location" />
      <Feedbacks id="feedbacks" />
      <Footer />
    </>
  )
}
