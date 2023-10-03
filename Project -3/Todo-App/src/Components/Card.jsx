import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Card({ task, id, setTasks , tasks }) {

  const [status, setStatus] = useState(false);
 
  //  Function for task removal
  function removeHandler(id) {
    {
      setTasks([...tasks].filter(e => e !== id));  
    }
    toast.warning("Task removed");
  }

  //  Function for Status updation
  function statusHandler() {
    setStatus(!status);
    toast.success("Task updated Succefully")
  }

  return (
    <div className="card">
      <h2 className="cardTitle">
        {id}  .   {task}
      </h2>
      <p className="cardStatus"> Status : {status ? "Completed" : "Pending"}</p>
      <button className="statusBtn" onClick={statusHandler}>Update Status</button>
      <button className="removeBtn" onClick={() => removeHandler(task)}>Remove</button>
    </div>
  );
}

export default Card;
