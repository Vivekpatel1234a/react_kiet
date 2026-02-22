//import { useState } from "react";
/*
export default function EventtoDo({ title, buttonText, onButtonClick }) {

  const handleSubmit = (e) => { //e is as a object 
    e.preventDefault();
    const input = e.target.querySelector("input");
   const inputval = input.value.trim();

    if(inputval==""){
        alert("this is empty box");
        return;
    }
    const li=document.createElement("li");
   
    li.innerHTML=`<span>${inputval}</span>
    <button class="deleteBtn">Delete</button>`;
    document.getElementById("tasklist").appendChild(li);
    input.value="";
    


  };

  const handleclicklist = (e) => {
  if (e.target.className === "deleteBtn") {
   e.target.parentElement.remove();
  
  }
};

  

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onButtonClick}>{buttonText}</button>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add task here" />
        <button type="submit">Add task</button>
      </form>

      <ul id="tasklist" onClick={handleclicklist}>
       
      </ul>
    </div>
  );*/

// const [task, setTask]=useState("");
// const [tasks,setTasks]=useState("");





// function EventTodo() {
//   const handleClick = () => {
//     alert("Button clicked!");
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>
//         Click Me
//       </button>
//     </div>
//   );
// }






/*
export default EventTodo;
function EventToDo({ name }) {

  const handleClick = () => {
    alert(`Button clicked by ${name}`);
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default EventToDo;*/




import { useState } from "react";

export default function EventToDo()
{  
/*    function handleSubmit(e)
    {
        e.preventDefault();
        //console.log("Event Happen");
        const input=e.target.task;
        const taskValue=input.value.trim();
        if(taskValue==="")
        {
            alert("Can not add empty task"); 
            return;
        }
        const li=document.createElement("li");
        li.innerHTML=`<span>${taskValue}</span>
        <button class="deleteBtn">Delete</button>`;
        document.getElementById("taskList").appendChild(li);

    }

    function handleListClick(e)
    {
        if(e.target.className==="deleteBtn")
        {
            e.target.parentElement.remove();
        }
    }

    return(
    <>
    <h1> To Do List</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" name="task" placeholder="Enter Task"/>
    <button type="submit">Add Task</button>

    </form>
    <ul id="taskList" onClick={handleListClick}></ul>
    </>);*/

   const[task,setTask]=useState("");
   const[tasks,setTasks]=useState([]);


 function handleSubmit(e) {
    e.preventDefault();

    const taskValue = task.trim();

    if (taskValue === "") {
      alert("Cannot add empty task");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, taskValue]);
    setTask("");
  }

  function handleDelete(index) {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
  }


    return(
        <>
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button
              className="deleteBtn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
);
}

