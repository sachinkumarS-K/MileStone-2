import React, { useState } from 'react'
import { toast } from 'react-toastify';
function TodoAdd({setTasks}) {

    const [data , setData] = useState("");
    
    function handleChange(event){
        //console.log(event.target.value)
        setData(event.target.value);
          
    }

    function clickHandler(){
        setTasks((prev) => [...prev , data]);
        setData("")
        toast.success("Task added Succesfully")
    }
  return (
    <div className='container' >

            <input type="text" value = {data} className='inputCont'  onChange={handleChange}/>
     
        <button className='addBtn' onClick={clickHandler} >Add</button>
    </div>
  )
}

export default TodoAdd