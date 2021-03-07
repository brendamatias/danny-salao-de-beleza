import styled from 'styled-components';

export const IntroductionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    padding: 40px 120px;

    > div {
      position: relative;
      top: 40%; 
      margin-top: -127px;
      max-width: 460px;
      color: #553232;

      strong {
        font-family: 'Abhaya Libre';
        font-size: 48px;
        font-weight: bold;
        display: block;
        margin-bottom: 36px;
      }

      p {
        font-size: 16px;
        margin-bottom: 14px;
      }

      button {
        margin-top: 20px;
        background: #E77A66;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        padding: 18px 44px;
        font-size: 12px;
        border-radius: 8px;
        color: #fff;
        border: 2px solid #E77A66;
        transition: 0.3s background;
        transition: 0.3s color;

        &:hover {
          background: #fff;
          color: #E77A66;
        }
      }
    }
  }

  @media (max-width: 500px) { 
    display: flex;
    flex-direction: column;
    height: 100%;

    > div {
      padding: 60px 25px;

      > div {
        position: static;
        margin-top: 0;
        max-width: 100%;

        strong {
          font-size: 36px;
        }
      }
    }
  }
`;
