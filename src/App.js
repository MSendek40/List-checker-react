import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from './Section';
import Header from './Header';
import Container from './Container';

const tasks = [
  { id: 1, content: "przejsc na reacta", done: false },
  { id: 2, content: "umyc samochod", done: false },
  { id: 3, content: "zrobić zakupy", done: true },
  { id: 4, content: "napisac list", done: true },
]

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<div> <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />

    </Container>
  );
}

export default App;
