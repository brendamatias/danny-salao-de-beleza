import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -100px;
  padding: 0 10% 100px 10%;

  > div > strong {
    font-weight: bold;
    font-size: 36px;
    display: block;
    margin-bottom: 26px;
    color: #010101;
    margin: 30px 0;
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 65px;
    margin-top: 16px;

    p {
      max-width: 180px;
      font-size: 14px;
      color: #707070;
      font-style: italic;
      font-weight: 500;
      letter-spacing: 0.06rem;
      margin: 14px 0 26px 0;
    }

    .feedback-user {
      display: flex;
      align-items: center;

      div:first-child {
        display: block;
        content: '';
        border-radius: 50%;
        background: #C4C4C4;
        width: 56px;
        height: 56px;
        margin-right: 10px;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      } 

      strong {
        color: #E77A66;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
      }

      span {
        color: #C7C7C7;
        font-style: italic;
        font-size: 12px;
      }
    }
  }
`;
