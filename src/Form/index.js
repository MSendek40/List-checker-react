import { useState, useRef } from "react";
import { ButtonForm, FormElements, InputStyle } from "./styled";


const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("")
        inputRef.current.focus();
    };

    return (
        <FormElements onSubmit={onFormSubmit}>
            <InputStyle
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <ButtonForm
            > Dodaj zadanie</ButtonForm>
        </FormElements>
    )
};

export default Form;