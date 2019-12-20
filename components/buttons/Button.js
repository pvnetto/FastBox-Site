import React from 'react';
import styled from 'styled-components';
import Colors from '../helpers/colors';


const StyledButton = styled.button`
    color: ${props => props.primary ? Colors.BLUE : Colors.YELLOW};
    background: transparent;
    border: 2px solid ${props => props.primary ? Colors.YELLOW : Colors.BLUE};
    border-radius: 2px;
    outline: none;

    transition: all 0.2s ease;

    :hover {
        background: ${props => props.primary ? Colors.YELLOW : Colors.BLUE};
    }
`;

const Button = ({ children, ...props }) => {
    return <StyledButton type="button" {...props}>{children}</StyledButton>;
};

export default Button;