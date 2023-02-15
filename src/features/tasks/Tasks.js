import React, { useState } from 'react';
import Form from "../../features/tasks/Form";
import TaskList from "../../features/tasks/TaskList";
import Buttons from "../../features/tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "./TaskList/useTasks";


function Tasks() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const { tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form
          addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body=
        {
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
