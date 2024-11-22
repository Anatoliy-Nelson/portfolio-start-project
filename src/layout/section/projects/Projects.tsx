import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {StyledButton, StyledP, StyledPhoto} from "../main/Main";
import photo from "../../../assets/images/ChertNodes.jpg";

export const Projects = () => {
    return (
        <StyledProjects>
            <StyledH2># projects</StyledH2>
            <StyledButton>View all ~~></StyledButton>
            <FlexWrapper>
                <StyledPhoto src={photo} alt=""/>
                <StyledP>HTML SCSS Python Flask</StyledP>
                <StyledH4>ChertNodes</StyledH4>
                <StyledP>Minecraft servers hosting </StyledP>
                <StyledButton>Live <~></StyledButton>
                <StyledButton>Cached ></StyledButton>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #6d87c8;
`
const StyledH2 = styled.h2`

`

const StyledH4 = styled.h4`

`

