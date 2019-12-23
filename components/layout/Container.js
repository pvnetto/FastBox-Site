import React from 'react';
import style from 'styled-components';
import Colors from '../helpers/colors';

const variantBG = ({ variant }) => {
    switch (variant) {
        case 'primary':
            return 'white';
        case 'secondary':
            return `${Colors.BLUE}`;
        case 'tertiary':
            return `${Colors.YELLOW}`;
        default:
            return 'white';
    }
}

const variantColor = ({ variant }) => {
    switch (variant) {
        case 'primary':
            return `${Colors.BLUE}`;
        case 'secondary':
            return `white`;
        case 'tertiary':
            return `${Colors.BLUE}`;
        default:
            return `${Colors.BLUE}`;
    }
}

export const StyledContainer = style.div`
    width: 100%;
    background: ${(variant) => variantBG(variant)};
    color: ${(variant) => variantColor(variant)};
    position: relative;
`


const Container = ({ children, ...props }) => {
    return (
        <StyledContainer {...props}>{children}</StyledContainer>
    );
};

export default Container;