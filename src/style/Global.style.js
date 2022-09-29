import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* roboto-regular - latin */

html {
    scroll-behavior: smooth;
}

html,body{
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;

}

`;

export default GlobalStyle;
