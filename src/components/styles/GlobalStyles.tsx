import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styles";

export const GlobalStyles = createGlobalStyle`
    *.
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${myTheme.colors.grey.dark};
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }
`