import React from 'react';
import Form from "../../features/tasks/TasksPage/Form";
import TaskList from "../../features/tasks/TasksPage/TaskList";
import Buttons from "./TasksPage/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />
        }
      />
      <Section
        title="Lista zadań"
        body=
        {
          <TaskList />
        }
        extraHeaderContent={
          <Buttons />
        }
      />
    </Container>
  );
}

export default Tasks;
