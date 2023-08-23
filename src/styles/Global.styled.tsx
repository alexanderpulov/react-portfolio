import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: #6b7280;
    }

    ul {
        list-style: none;
    }

`;
