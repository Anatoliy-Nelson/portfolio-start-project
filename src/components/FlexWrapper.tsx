import styled from "styled-components";

type FlexWrapperPropType ={
    direction?: string
    justify?: string
    align?: string
    wrap?: string

}

export const FlexWrapper = styled.div<FlexWrapperPropType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align|| "stretch"};
    flex-direction: ${props => props.wrap || "nowrap"};
`