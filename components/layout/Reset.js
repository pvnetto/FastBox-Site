// @see https://github.com/zacanger/styled-reset
import React from 'react';
import style, { createGlobalStyle, css } from 'styled-components';
import { device } from '../helpers/queries';

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

    html, body {
        overflow-x: hidden;
    }
    
    body {
        line-height: 1;
        position: relative;
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

    a {
        text-decoration: none;
    }

    h1 {
        font-size: 2.2rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    a, p {
        font-size: 1rem;
    }

    small {
        font-size: 0.8rem;
    }

    @media ${device.tablet} {
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

        small {
            font-size: 1rem;
        }
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