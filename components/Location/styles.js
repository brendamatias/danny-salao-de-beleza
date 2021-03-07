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
    left: -34px;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: #E77A66;
    border-radius: 50%;
    bottom: -25px;
    right: -25px;
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
    bottom: 5px;
    right: 5px;
    z-index: 3;
  }
`;
