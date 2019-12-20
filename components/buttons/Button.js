import React from 'react';
import styled from 'styled-components';
import Colors from '../helpers/colors';


const StyledButton = styled.button`
    color: ${Colors.BLUE};
    background: transparent;
    border: 2px solid ${Colors.YELLOW};
    outline: none;
`

const Button = ({ children, ...props }) => {
    return <StyledButton type="button" {...props}>{children}</StyledButton>;
};

export default Button;