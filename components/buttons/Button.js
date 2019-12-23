import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../helpers/colors';


const StyledButton = styled.button`
    color: ${Colors.BLUE};
    background: ${Colors.YELLOW};
    border: 3px solid ${Colors.YELLOW};
    border-radius: 2px;
    outline: none;

    font-weight: 600;

    opacity: 0.9;
    cursor: pointer;

    transition: all 0.3s ease;

    :hover {
        opacity: 1;
        transform: scale(1.05);
    }
`;

const Button = ({ children, ...props }) => {
    return <StyledButton type="button" {...props}>{children}</StyledButton>;
};

Button.defaultProps = {
    primary: false,
}

export default Button;