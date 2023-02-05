import React from "react";
import { ButtonsButton } from "./styled";
import { TasksButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <TasksButtons>
            <ButtonsButton
                hidenDone
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </ButtonsButton>
            <ButtonsButton
                allDone
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </ButtonsButton>
        </TasksButtons>
    )
);

export default Buttons;