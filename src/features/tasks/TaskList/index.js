import React from "react";
import { TasksListStyle, TasksListItem, ContentDone, Button } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { toggleTaskDone } from "../tasksSlice";

const TaskList= ({ removeTask}) => {
    const {tasks, hideDone} = useSelector(selectTasks);
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