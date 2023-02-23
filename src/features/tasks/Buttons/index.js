import React from "react";
import { ButtonsButton } from "./styled";
import { TasksButtons } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTaskEmpty, selectHideDone, selectIsEveryTaskDone } from "../tasksSlice";

const Buttons = () => {
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone)

    const dispatch = useDispatch();
    return (
        !areTaskEmpty && (
            <TasksButtons>
                <ButtonsButton
                    hidenDone
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </ButtonsButton>
                <ButtonsButton
                    allDone
                    onClick={() => dispatch(setAllDone())}
                    disabled={isEveryTaskDone}
                >
                    Ukończ wszystkie
                </ButtonsButton>
            </TasksButtons>
        )
    );
}

export default Buttons;