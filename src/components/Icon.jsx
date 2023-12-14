import React from 'react';
import styled, { css } from 'styled-components';

// name, size 에 값이 있으면 해당하는 값을, 아니면 기본 값 md 사이즈 적용
export default function Icon({ name = '', size = 'md' }) {
    return <StyledIcon name={name} size={size} />;
}

const StyledIcon = styled.span`
    display: inline-block;

    ${(props) => getSize(props.size)}

    background: ${(props) =>
        props.name &&
        iconsUrl &&
        `url(${iconsUrl[props.name]}) center / contain no-repeat`};
`;

// name에 일치하는 아이콘 이미지 경로
const iconsUrl = {
    마이메뉴: '/assets/images/icons/ico_header_my.png',
    장바구니: '/assets/images/icons/ico_header_bag.png',
    검색: '/assets/images/icons/ico_header_search_pc.png',
};

// 아이콘 사이즈 받아오기
const getSize = (size) => {
    // 단위 px, vw, vh, rem, em 으로 끝나는 값이 들어왔을 때 적용
    if (
        typeof size === 'string' &&
        /^\d+(\.\d+)?(px|vw|vh|rem|em|%)$/i.test(size)
    ) {
        return css`
            width: ${size};
            height: ${size};
        `;
    }
    switch (size) {
        case 'lg':
            return css`
                width: 3rem;
                height: 3rem;
            `;
        case 'md':
            return css`
                width: 1.5rem;
                height: 1.5rem;
            `;
        case 'sm':
            return css`
                width: 1rem;
                height: 1rem;
            `;
        default:
            return css`
                width: 1.5rem;
                height: 1.5rem;
            `;
    }
};
