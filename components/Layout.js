// @see https://github.com/zacanger/styled-reset
import React from 'react';
import style, { createGlobalStyle, css } from 'styled-components';


const LayoutDiv = style.div`
    background: white;
`

const Reset = css`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
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

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2.5rem;
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

const GlobalStyle = createGlobalStyle`${Reset}`;

const Layout = ({ children }) => {
    return (
        <LayoutDiv>
            <GlobalStyle />
            {children}
        </LayoutDiv>
    )
};

export default Layout;