import React from 'react';
import styled from "styled-components";

export const Menu = (props: {menuItems: Array <string>}) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                   return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}

                <li>
                    <select name="lang" id="lang-select">
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="ua">UA</option>
                    </select>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`