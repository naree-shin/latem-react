import React from 'react';
import styled from 'styled-components';
import SearchBox from '../SearchBox';
import IconButton from '../IconButton';
// import theme from "./styles/theme";

export default function Header() {
    return (
        <>
            <HeaderWrap>
                <HeaderTop>
                    <Logo>
                        <a href='/'>Latem</a>
                    </Logo>
                    <SearchBox id={'search'} placeholder={'통합검색'} />
                    <IconButton name={'마이메뉴'} size={'lg'} />
                    <IconButton name={'장바구니'} size={'lg'} />
                </HeaderTop>
                <Nav></Nav>
            </HeaderWrap>
        </>
    );
}
const HeaderWrap = styled.header`
    width: 100%;
    background-color: pink;
    /* background-color: ; */
`;
const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: ${(props) => props.theme.responsiveMaxWidth};
    .search_box {
        margin-right: auto;
    }
`;
const Logo = styled.h1`
    flex: none;
    width: 92px;
    height: 29px;
    margin-right: 20px;
    background: url(/assets/images/logo.png) center/ contain no-repeat;
    a {
        text-indent: 100%;
        overflow: hidden;
    }
`;
const Nav = styled.nav``;
