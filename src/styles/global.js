import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  @import url('https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  * {
    /*box-sizing: border-box;*/
    margin: 0;
    padding: 0;
    /*font-family: 'Bebas Neue', cursive;*/
    font-family: 'Roboto', sans-serif;
    /*font-family: 'Rubik Moonrocks', cursive !important;*/
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    #font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary2};
    #cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  ::-webkit-scrollbar{
    width: 3px;
    
  }

  ::-webkit-scrollbar-track{
    background: none;
  }

  ::-webkit-scrollbar-thumb{
    background-image: linear-gradient(${(props) =>
      props.theme.colors.primary2}, ${(props) => props.theme.colors.primary1});
    border-radius: 25px;
  }

`;

export default GlobalStyles;
