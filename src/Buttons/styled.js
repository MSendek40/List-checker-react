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
    transition: 1.5s;
    ${({ hidenDone }) => hidenDone && css`
    
    &:hover{
        color: rgb(21, 168, 168);
        cursor: pointer;
    }
    `}

    ${({allDone }) => allDone && css`
    &:hover{
        color: rgb(21, 168, 168);
        cursor: pointer;
    }
    ` }
`
//export const Button = styled.button`
  //  border-style: none;
    //height: 30px;
    //width: 30px;

//${({ toggleDone }) => toggleDone && css`
  //  background: green;
   //* color: white;
   // height: 30px;
   // width: 30px;
   // transition: 1s;

   // &:hover{
   //     background: rgb(37, 167, 37);
 //   cursor: pointer;
  //  } 
//`}  