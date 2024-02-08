import styled, {css} from "styled-components";
import {MyAnimation} from "./styles/animation/Animation";


type StyledBtnPropsType = {
    color?: string;
    fontSize?: string;
    btnType: "primary" | "outlined" | "menu-button";
    active?: boolean;
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    background-color: ${props => props.color || "#fb3f78"};
    padding: 10px 20px;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;
    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    color: snow; 
        
    &:hover {
        background-color: #4053cc;
    }    
    `}
    
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#fb3f78"};
        color: 2px solid ${props => props.color || "#fb3f78"};
        background-color: transparent;
        
    &:hover {
        border-color: #4053cc;
        color: #4053cc;
        background-color: transparent;
    }    
    `}
    
${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(119, 119, 119, 0.52);
    `}        
`
export const SuperBtn = styled(StyledBtn)`
    background-color: aqua;
    border-radius: 10px;
    color: darkslategrey;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
`