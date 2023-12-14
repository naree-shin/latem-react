import React from 'react';
import styled, { css } from 'styled-components';

export default function Button({ name = '', size = 'md' }) {
    return (
        <>
            <StyledButton size={size}>{name}</StyledButton>
        </>
    );
}
const getSizeStyles = (size) => {
    switch (size) {
        case 'lg':
            return css`
                height: 3rem;
                padding: 10px;
                font-size: 2rem;
            `;
        case 'md':
            return css`
                height: 2rem;
                padding: 10px;
                font-size: 1rem;
            `;
        case 'sm':
            return css`
                height: 2rem;
                padding: 10px;
                font-size: 1rem;
            `;
        case 'xs':
            return css`
                height: 2rem;
                padding: 10px;
                font-size: 1rem;
            `;
        case 'xl':
            return css`
                height: 2rem;
                padding: 10px;
                font-size: 1rem;
            `;
        default:
            return css`
                height: 2rem;
                padding: 10px;
                font-size: 1rem;
            `;
    }
};
const StyledButton = styled.button`
    ${(props) => getSizeStyles(props.size)}
`;
