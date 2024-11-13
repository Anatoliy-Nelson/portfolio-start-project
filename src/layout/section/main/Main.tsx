import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/Cap-and-hidie.png'

export const Main = () => {
    return (
        <div>
            <h1>Elias is a web designer and front-end developer</h1>
            <span>He crafts responsive websites where technologies meet creativity</span>
            <button>Contact me!!</button>
            <Photo src={photo} alt=""/>
            <span>Currently working on Portfolio</span>
            <h2>With great power comes great electricity bill</h2>
            <p>- Dr. Wh</p>



        </div>
    );
};

const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
    
`
