import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
    const [counter,setCounter]= useState(0)
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{setCounter(counter+1)}}>+</button>
      <span className={styles.span} data-cy="task-counter-value">{counter}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>{
        if(counter>0){setCounter(counter-1)
      }}}>-</button>
    </div>
  );
};

export default Counter;