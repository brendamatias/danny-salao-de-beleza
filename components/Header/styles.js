import styled from 'styled-components';

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
  }

  .header-links li a {
    color: #BCBCBC;
    font-size: 18px;
    font-weight: bold;
    margin-right: 40px;
    transition: 0.3s color;

    &:hover {
      color: #202026;
    }
  }

  .header-icons {
    align-items: center;
    background: #2B2E35;
    padding: 11px 22px;
    border-radius: 12px;

    svg {
      transition: 0.3s color;
      font-size: 22px;
      color: #fff;

      &:hover {
       color: #FDE4DB;
      }
    }

    .header-icons_facebook {
      margin-right: 15px;
    }
  }

  .active a {
    color: #202026 !important;
  }
`;
