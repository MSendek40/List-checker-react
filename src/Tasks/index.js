import React from "react";
import "./style.css";


const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks__elements">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item${  hideDone && task.done ? " tasks__item--hidden " : " "
                    }`} >
                <button 
                onClick={()=> toggleTaskDone(task.id)}
                className="tasks__button tasks__button--toggleDone"

                >
                    {task.done ? "✓" : ""}
                    
                </button>

                <span className={`tasks__content${task.done ? " tasks__content--done" : " "}`}>
                    {task.content}
                </span>

                <button 
                 onClick={()=> removeTask(task.id)}
                className="tasks__button tasks__button--remove"
               
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);


export default Tasks;