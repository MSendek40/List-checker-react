import styled from "styled-components";
import { css } from "styled-components";


export const TasksButtons = styled.div`
 display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;  
`
export const ButtonsButton = styled.button`
   background-color: white;
    color: teal;
    font-weight: 400;
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: 1.5s;
    &:hover{
        color: rgb(21, 168, 168);
        cursor: pointer;
    }

    ${({ hidenDone }) => hidenDone && css`   
`}

    ${({allDone }) => allDone && css`
    &:hover{
        color: rgb(21, 168, 168);
        cursor: pointer;
    }`}`
