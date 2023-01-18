import React, {useState} from "react";
import "./style.css";

const Form = ({addNewTask}) => {

    const [newTaskContent, setNewTaskContent] = useState("");

const onFormSubmit =(event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
}

return (<form 
onSubmit={onFormSubmit}
className="form__elements">
<input 
value={newTaskContent} 
className="form__input"
    placeholder="Co jest do zrobienia?"
    autofocus
    onChange={(target) => setNewTaskContent(target.value)}
    />
<button className="form__button">Dodaj zadanie </button>
</form>)
    
    
}




export default Form;