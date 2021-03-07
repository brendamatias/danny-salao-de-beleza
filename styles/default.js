import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.padding ? props.padding : '100px 10%'};
  background: ${props => props.bg};

  > div {
    max-width: 460px;

    strong {
      font-weight: bold;
      font-size: 36px;
      display: block;
      margin-bottom: 26px;
      color: ${props => props.titleColor}
    }

    p {
      font-size: 16px;
      margin-bottom: 14px;
      color: ${props => props.contentColor}
    }

    button {
      margin-top: 20px;
      background: ${props => props.buttonBg};
      padding: 12px 34px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 12px;
      color: ${props => props.buttonColor};
      border: 2px solid ${props => props.buttonBg};
      transition: 0.3s background;

      &:hover {
        background: ${props => props.buttonColor};
        color: ${props => props.buttonBg};
      }
    }
  }
`;