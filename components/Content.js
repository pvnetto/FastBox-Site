import React from 'react';
import style from 'styled-components';

const StyledContent = style.div`
    padding: 0rem 10rem;
`

const Content = ({ children }) => {
    return (
        <StyledContent>{children}</StyledContent>
    );
};

export default Content;