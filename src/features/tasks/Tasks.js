import React from 'react';
import Form from "../../features/tasks/Form";
import TaskList from "../../features/tasks/TaskList";
import Buttons from "../../features/tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "./TaskList/useTasks";
import {useSelector} from "react-redux";
import { selectTasks } from './tasksSlice';


function Tasks() {

  const {tasks} = useSelector(selectTasks); 

  const {//tasks,
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
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
