// @see https://github.com/zacanger/styled-reset
import React from 'react';
import style, { createGlobalStyle, css } from 'styled-components';

const ResetStyle = css`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        
        font-family: 'Roboto';
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }

    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 3rem;
    }

    h3 {
        font-size: 2rem;
    }

    a, p {
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
    }

    small {
        font-size: 1rem;
    }
`

const GlobalStyle = createGlobalStyle`${ResetStyle}`;

const Reset = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            {children}
        </div>
    )
};

export default Reset;