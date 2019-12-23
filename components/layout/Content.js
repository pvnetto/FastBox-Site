import React from 'react';
import style from 'styled-components';
import { device } from '../helpers/queries';

const StyledContent = style.div`

    padding: 0rem 1rem;

    @media ${device.tablet} {
        padding: 0rem 3rem;
    }

    @media ${device.laptop} {
        padding: 0rem 6.5rem;
    }

    @media ${device.laptopL} {
        padding: 0rem 14rem;
    }
`

const Content = ({ children }) => {
    return (
        <StyledContent>{children}</StyledContent>
    );
};

export default Content;