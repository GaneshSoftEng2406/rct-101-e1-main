import React,{useState} from "react";
import { AddTask } from "./AddTask";
import Task from "./Task/Task";
import data from "../data/tasks.json"
import styles from "./taskApp.module.css";

const TaskApp = () => {
  const [todo,setTodo] = useState([data])
  const addTodo = (newTodo) =>{
    setTodo([...todo,newTodo])
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <AddTask addTodo={addTodo}/>
      <Task/>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;