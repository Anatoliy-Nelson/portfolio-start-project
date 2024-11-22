import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/Cap-and-hidie.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Projects} from "../projects/Projects";
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <StyledH1>Elias is a web designer and front-end developer</StyledH1>
                <StyledP>He crafts responsive websites where technologies meet creativity</StyledP>
                <StyledButton>Contact me!!</StyledButton>
                <StyledPhoto src={photo} alt=""/>
                <StyledP>Currently working on Portfolio</StyledP>
            </FlexWrapper>
            <Icon iconId="quote"/>
            <StyledH3>With great power comes great electricity bill</StyledH3>
            <Icon iconId="quote"/>
            <StyledH3>- Dr. Who</StyledH3>
        </StyledMain>

);
};

const StyledMain = styled.div`
min-height: 100vh;

`

export const StyledPhoto = styled.img`
width: 457px;
height: 386px;
object-fit: cover;

`
const StyledH1 = styled.h1`

`

export const StyledP = styled.p`

`

const StyledH3 = styled.h3`

`

export const StyledButton = styled.button`

`