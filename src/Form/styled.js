import styled from "styled-components";


export const FormElements = styled.form`

box-shadow: 8px 8px 24px 0px rgb(208, 208, 214);
display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    background-color: white;
    padding: 10px;

    @media (max-width: 767px) {grid-template-columns: 1fr};
`;

export const InputStyle = styled.input`
   color: rgb(48, 42, 42);
    border-style: solid;
    border-color: lightgrey;
    border-width: 1px;
    padding: 10px;
`;

export const ButtonForm = styled.button`
 background-color: teal;
    color: white;
    border: none;
    padding: 10px;
    transition: 1s;
    
  &:hover{
    background-color: rgb(6, 146, 146);
    transform: scale(1.05);
    @media (max-width: 767px) {
    grid-template-columns: 1fr;
    }
  }
`