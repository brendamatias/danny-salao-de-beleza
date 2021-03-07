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
  
  .mobile-menu {
    display: none;
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

  .link-active a {
    color: #202026 !important;
  }
  
  @media (max-width: 648px) {
    margin-top: -20px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-links {
      width: 100%;
      /* height: 100vh; */
      position: fixed;
      top: 0;
      right: -100%;
      opacity: 0;
      transition: all 0.5s ease;
      flex-direction: column;
      list-style-type: none;
      padding: 50px 0 30px 0;
    }

    .header-active {
      background: #FDE4DB;
      right: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 10;
      /* align-content: center; */
    }

    .header-links li {
      width: 100%;
      padding: 8px 30px;
    }
    
    .header-links li a {
      display: block;
      margin: 10px auto;
      color: #7a7a7a;
      font-size: 16px;
    }
    
    .mobile-menu {
      display: block;
      width: 100%;
      position: absolute;
      z-index: 10;
      right: 0;
      top: 0;
      padding: 10px 20px;
      text-align: right;
    }

    .link-active {
      background: #E77A66;

      a {
        color: #fff !important;
      }
    }

    .header-icons {
      display: none;
    }

    .menu-scroll-active {
      display: block;
      background: #fff;
      width: 100%;
      position: fixed;
      z-index: 10;
      right: 0;
      top: 0;
      padding: 10px 20px;
      box-shadow: 0 0 0.7em #888888;
      text-align: right;
    }
  }
`;
