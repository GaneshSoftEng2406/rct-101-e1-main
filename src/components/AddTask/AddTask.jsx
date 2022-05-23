import React,{ useState} from "react";
import Task from "../Task/Task";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [query,setQuery]= useState("hello")
  const [todo,setTodo]= useState([])
// 
  const onDelete=(id)=>{
    let newTodo=todo.filter(item => item.id !== id)
    setTodo(newTodo)
  }
  // 
  // 



  

  // NOTE: do not delete `data-cy` key value pair
  return (



    
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add Task..." onChange={(e)=>setQuery(e.target.value)}/>
      <button data-cy="add-task-button" onClick={ ()=>{
        if(query){
          setTodo([...todo,{id:Date.now(), value: query}]);
          setQuery("")}}}>add</button>



          

          {todo.map((item) =>(


            <Task key={item.id} item={item} onDelete={onDelete} />
          ))}


    </div>



  );
};

export default AddTask;