import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
    /* styled-reset */
    ${reset}

    /* global variables */
    :root {
        --contentsWidth: ${theme.layout.contentsWidth.pc}
    }
    /* -- tablet */
    @media screen and (max-width: ${theme.deviceSize.tablet}) {
        :root {
            ${theme.layout.contentsWidth.mo}
        }
    }
    /* -- mobile */
    @media screen and (max-width: ${theme.deviceSize.mobile}) {
        :root {
            
        }
    }

    /* font */
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* custom */
    a {
        width: 100%;
        height: 100%;
        display: block;
    }
    button, input {
        background: none;
        border: none;
        padding: 0;
    }
    input:focus {
        outline: none;
    }
    input::-ms-clear,
    input::-ms-reveal{
        display:none;width:0;height:0;
    }
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration{
        display:none;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-transition: background-color 9999s ease-out;
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;
        -webkit-text-fill-color: #fff !important;
    }
    .a11y {
    position: absolute;
    z-index: -1;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
            clip-path: inset(50%);
    white-space: nowrap;
    overflow: hidden;
}
`;
export default GlobalStyles;
