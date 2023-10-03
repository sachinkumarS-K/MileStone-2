import React from "react";
import Card from "./Card";

function Cards({ tasks,setTasks}) {
  console.log(tasks , typeof(tasks));
  return (
    <div className="cardsContainer">
      {tasks.map((task, index) => {
        return <Card key={index} task={task} id = {index+1} setTasks = {setTasks} tasks = {tasks}/>;
      })}
    </div>
  );
}

export default Cards;
