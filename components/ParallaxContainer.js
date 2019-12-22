import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';

import { StyledContainer } from './Container';

const ParallaxStyle = style(StyledContainer)`
    background-image: url(${props => props.image ? props.image : './images/BACKGROUND-TOP.jpg'});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const ParallaxContainer = ({ children, ...props }) => {

    return (
        <ParallaxStyle {...props}>{children}</ParallaxStyle>
    );
};

ParallaxContainer.defaultProps = {
    image: '',
}

export default ParallaxContainer;