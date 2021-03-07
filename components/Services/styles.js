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
    bottom: -34px;
    right: -34px;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: #E77A66;
    border-radius: 50%;
    top: calc(50% - 40px);
    left: -50px;
    z-index: 2;
  }

    
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 40px;
    width: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    top: calc(50% - 10px);
    left: -65px;
    z-index: 3;
  }
  
  @media (max-width: 500px) { 
    .circles {
      bottom: -14px;
      right: -14px;

      img {
        width: 80px;
        height: 80px;
      }
    }

    &:before {
      height: 70px;
      width: 70px;
      top: calc(50% - 20px);
      left: -20px;
    }
      
    &:after {
      height: 30px;
      width: 30px;
      top: calc(50% - 0px);
      left: 0;
    }
  }
`;
