import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

export default function SearchBox({ id, placeholder }) {
    return (
        <StyledSearchBox className='search_box'>
            <label htmlFor={id} className='a11y'>
                검색
            </label>
            <Input id={id} type='search' placeholder={placeholder}></Input>
            <SearchButton>
                <Icon name={'검색'} size={'18px'}></Icon>
            </SearchButton>
        </StyledSearchBox>
    );
}

const StyledSearchBox = styled.div`
    background: #fff;
    width: 340px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;
const Input = styled.input`
    padding: 0 20px;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    &::placeholder {
        color: #ccc;
    }
`;
const SearchButton = styled.button`
    width: 50px;
    height: 100%;
    flex: none;
    padding-right: 5px;
`;
