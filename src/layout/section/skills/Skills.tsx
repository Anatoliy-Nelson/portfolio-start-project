import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle></SectionTitle>
            <FlexWrapper>
                <Skill>
                    <Icon iconId={}/>
                    <SkillText></SkillText>
                    <SkillTitle></SkillTitle>
                    <SkillText></SkillText>
                    <Link/>
                </Skill>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`