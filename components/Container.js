import React from 'react';
import style from 'styled-components';

const StyledContainer = style.div`
    padding: 0rem 10rem;
`

const Container = ({ children }) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    );
};

export default Container;