import React from 'react';
import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "52"}  height={props.height || "52"} viewBox={props.viewBox || "0 0 52 52"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="logoWhite">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z"
                      fill="white"/>
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </g>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
