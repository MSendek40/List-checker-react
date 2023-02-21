import React from "react";
import { TasksListStyle, TasksListItem, ContentDone, Button } from "./styled"
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";

const TaskList= ({ removeTask, toggleTaskDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    return (
        <TasksListStyle>
            {tasks.map(task => (
                <TasksListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✓" : ""}
    
                    </Button>
    
                    <ContentDone done={task.done}>
                        {task.content}
                    </ContentDone>
    
                    <Button
                        remove
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </Button>
                </TasksListItem>
            ))}
        </TasksListStyle>
    );
}


export default TaskList;