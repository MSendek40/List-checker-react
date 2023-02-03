import { useState } from "react";
import { ButtonForm, FormElements, InputStyle } from "./styled";

const Form = ({ addNewTask }) => {
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
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <ButtonForm> Dodaj zadanie</ButtonForm>
        </FormElements>
    )
};

export default Form;