import React from "react";
import { TasksListStyle, TasksListItem, ContentDone, Button } from "./styled"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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


export default Tasks;