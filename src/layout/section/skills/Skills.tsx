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
                    <Icon iconId={"discord"}/>
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
const SectionTitle = styled.section`
    
`
const Skill = styled.section`

`
const SkillText = styled.section`
    
`
const SkillTitle = styled.section`

`
const Link = styled.section`

`