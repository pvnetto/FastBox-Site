import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../helpers/colors';


const StyledButton = styled.button`
    color: ${primary => primary ? Colors.BLUE : Colors.YELLOW};
    background: transparent;
    border: 2px solid ${primary => primary ? Colors.YELLOW : Colors.BLUE};
    border-radius: 2px;
    outline: none;

    transition: all 0.2s ease;

    :hover {
        background: ${primary => primary ? Colors.YELLOW : Colors.BLUE};
    }
`;

const Button = ({ children, ...props }) => {
    return <StyledButton type="button" {...props}>{children}</StyledButton>;
};

Button.defaultProps = {
    primary: false,
}

export default Button;