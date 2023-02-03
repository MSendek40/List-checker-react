import styled from "styled-components"
import { css } from "styled-components";


export const TasksListStyle = styled.ul `
 box-shadow: 8px 8px 24px 0px rgb(208, 208, 214);
    padding: 10px;
    background-color: white;
    border: none;
    margin-top: 1px;
    list-style-type: none;
    `;

    export const TasksListItem = styled.li `
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 100px;
    align-items: center;
    padding: 10px;
    border-bottom: solid 1px hsl(0, 3%, 83%);
    word-break: break-word;
    ${({hidden}) => hidden && css`
    display: none;`}


    @media (max-width: 767px) {
      grid-template-rows: 1fr;
      word-break: break-word;
      
    }`