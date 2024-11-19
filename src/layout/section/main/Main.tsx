import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/Cap-and-hidie.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Projects} from "../projects/Projects";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                        <h2>Elias is a web designer and front-end developer</h2>
                        <span>He crafts responsive websites where technologies meet creativity</span>
                        <button>Contact me!!</button>
                </div>
                <div>
                    <Photo src={photo} alt=""/>
                    <span>Currently working on Portfolio</span>
                </div>
                <div>
                    <h3>With great power comes great electricity bill</h3>
                    <p>- Dr. Wh</p>
                </div>
            </FlexWrapper>
        </StyledMain>

);
};

const StyledMain = styled.div`
min-height: 100vh;

`

const Photo = styled.img`
width: 457px;
height: 386px;
object-fit: cover;

`
const StyledH2 = styled.h2`

`

const StyledH3 = styled.h3`

`