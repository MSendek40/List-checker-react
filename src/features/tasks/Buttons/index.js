import React from "react";
import { ButtonsButton } from "./styled";
import { TasksButtons } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { toggleHideDone } from "../tasksSlice";

const Buttons = ({setAllDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <TasksButtons>
                <ButtonsButton
                    hidenDone
                    onClick={()=> dispatch(toggleHideDone())}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </ButtonsButton>
                <ButtonsButton
                    allDone
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </ButtonsButton>
            </TasksButtons>
        )
    );
}

export default Buttons;