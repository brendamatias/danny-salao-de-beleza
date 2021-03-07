import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font: 14px 'Roboto', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Gilroy', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  img {
    -webkit-user-draggit: none;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
  }
`;
