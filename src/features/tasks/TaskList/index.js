import React from "react";
import { TasksListStyle, TasksListItem, ContentDone, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { toggleTaskDone } from "../tasksSlice";
import { selectHideDone,removeTask } from "../tasksSlice";

const TaskList= () => {
    const {tasks} = useSelector(selectTasks);
    const {hideDone} = useSelector(selectHideDone);

    const dispatch = useDispatch()
    
    return (
        <TasksListStyle>
            {tasks.map(task => (
                <TasksListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
    
                    </Button>
    
                    <ContentDone done={task.done}>
                        {task.content}
                    </ContentDone>
    
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </TasksListItem>
            ))}
        </TasksListStyle>
    );
}


export default TaskList;