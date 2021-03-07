import styled from 'styled-components';

export const Container = styled.footer`
  background: #B7432E;

  .footer-top {
    display: flex;
    justify-content: space-between;
    padding: 100px 10%;


    ul {
      display: flex;

      li {
        display: flex;
        flex-direction: column;
      }

      li:not(:last-child) {
        margin-right: 60px;
      }

      strong, span, span a {
        font-size: 13px;
        color: #fff;
      }

      hr {
        background-color: rgba(255,255,255, 20%);
        height: 2px; 
        border: 0;
        margin: 10px 0 25px 0;
      }

      strong {
        font-weight: bold;
      }

      span, span a {
        display: flex;
        align-items: center;
        font-weight: 300;
        margin-bottom: 8px;

        svg {
          margin-right: 10px;
        }
      }

      a {
        transition: 0.3s color;

        &:hover {
          color: #FDE4DB;
        }
      }
    }
  }

  .footer-bottom {
    padding-bottom: 12px;
    text-align: center;

    span {
      color: rgba(255, 255, 255, 80%);
      font-size: 11px;
      font-weight: 300;
    }

    hr {
      background-color: rgba(255,255,255, 20%);
      height: 1px; 
      border: 0;
      margin-bottom: 12px;
    }
  }
`;