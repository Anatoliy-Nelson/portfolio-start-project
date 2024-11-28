import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items = ["#home", "#works", "#about", "#contacts", "lang"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems = {items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #deecc3;
    display: flex;
    justify-content: space-between;
`