import React from "react";
import "./style.css";
import {TasksListStyle} from "./styled"
import {TasksListItem} from "./styled"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TasksListStyle>
        {tasks.map(task => (
            <TasksListItem
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
            </TasksListItem>
        ))}
    </TasksListStyle>
);


export default Tasks;