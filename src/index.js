import React,  {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

const AddTask=({addTask})=>{
const[value,updateValue]=useState("");


const handleSubmit=e=>{
    e.preventDefault();
    if(value!=="")
    {
        addTask(value)
        updateValue("");
    }
};
return(
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Enter your task todo" onChange={e=>updateValue(e.target.value)}>
        </input>
        <button type="submit"><i class="material-icons">add</i></button>
    </form>
)
};
const ToDolist=()=>{
    const addTask=text=>updateTask([...tasks,{text}]);
    const [tasks,updateTask]=useState([
        {
            text:"Wake Up",
            isCompleted:false
        },
        {
            text:"Work Up",
            isCompleted:false
        },
        {
            text:"Boost Up",
            isCompleted:false
        }
    ]);

    const toggleTak=index=>{
        const newTask=[...tasks];
        if(newTask[index].isCompleted)
        {
            newTask[index].isCompleted=false;
        }
        else{
            newTask[index].isCompleted=true;
        }
        updateTask(newTask)
    }
    const removeTask=index=>{
        const newTask=[...tasks];
        newTask.splice(index,1);
        updateTask(newTask);
    }
    return(
        <div className="list-of-tasks-todo">
            {tasks.map((task,index) =>(
            <div className="task-status">
                <span onClick={()=>toggleTak(index)} className={task.isCompleted? "task-name completed-task":"task-name"}>
                {index}
              {task.text}
                </span>
                <button onClick={()=>removeTask(index)}><i class="material-icons">delete</i></button>
              
             </div>
))}
<AddTask addTask={addTask} />
         </div>
 );
}
ReactDOM.render(<ToDolist />,document.getElementById("root"));
