import { useState, useRef } from "react";
import { ButtonForm, FormElements, InputStyle } from "./styled";


const Form = ({ addNewTask }) => {

    const inputRef = useRef(null)

const focusInput = () => {inputRef.current.focus();
}

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("")
    };

    return (
        <FormElements onSubmit={onFormSubmit}>
            <InputStyle 
            ref = {inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <ButtonForm
            onClick={focusInput}
            > Dodaj zadanie</ButtonForm>
        </FormElements>
    )
};

export default Form;