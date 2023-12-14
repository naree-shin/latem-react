import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

export default function IconButton({ name = '', size = 'md' }) {
    const ButtonSize = getSize[size]?.buttonSize || getSize['md'].buttonSize;
    const IconSize = getSize[size]?.iconSize || getSize['md'].iconSize;
    return (
        <Button size={ButtonSize}>
            <Icon name={name} size={IconSize} />
        </Button>
    );
}
const getSize = {
    lg: { buttonSize: '60px', iconSize: '34px' },
    md: { buttonSize: '40px', iconSize: '20px' },
    sm: { buttonSize: '30px', iconSize: '14px' },
};

const Button = styled.button`
    width: ${(props) => `${props.size}`};
    height: ${(props) => `${props.size}`};
`;
