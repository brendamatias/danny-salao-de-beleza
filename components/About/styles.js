import styled from 'styled-components';

export const DivImage = styled.div`
  position: relative;

  .img {
    border-radius: 24px;
    z-index: 1;
  }

  .circles {
    position: absolute;
    z-index: 2;
    top: -34px;
    right: -34px;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: #F6EEEB;
    border-radius: 50%;
    bottom: -25px;
    left: -25px;
    z-index: 2;
  }

    
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: #010101;
    border-radius: 50%;
    bottom: -10px;
    left: 50px;
    z-index: 3;
  }

  @media (max-width: 500px) { 
    .circles {
      top: -14px;
      right: -14px;

      img {
        width: 80px;
        height: 80px;
      }
    }

    &:before {
      height: 70px;
      width: 70px;
      bottom: -15px;
      left: -15px;
    }
      
    &:after {
      height: 30px;
      width: 30px;
      bottom: 0;
      left: 40px;
    }
  }
`;
