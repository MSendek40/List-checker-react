import React from "react";
import { ButtonsButton } from "./styled";
import { TasksButtons } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllDone,
    selectAreTaskEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    fetchExampleTasks
} from "../../tasksSlice";

const Buttons = () => {
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone)

    const dispatch = useDispatch();
    return (

        <TasksButtons
        >
            <ButtonsButton
             onClick={() => { dispatch(fetchExampleTasks()) }}
            >
                Pobierz przykładowe zadania
            </ButtonsButton>
            {!areTaskEmpty && (
                <>
                    <ButtonsButton
                        onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż " : "Ukryj "} ukończone
                    </ButtonsButton>
                    <ButtonsButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}>
                        Ukończ wszystkie
                    </ButtonsButton>
                </>
            )}
        </TasksButtons>
    )
};

export default Buttons;