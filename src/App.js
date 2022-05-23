import React from "react";
import { AddTask } from "./components/AddTask";
import Counter from "./components/Counter/Counter";
import Task from "./components/Task/Task";
import TaskApp from "./components/TaskApp";



function App() {
  return <div>
    
    <Counter />
    <TaskApp />
  <AddTask />
  {/*  */}
  <Task />
    </div>;
}

export default App;