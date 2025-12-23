import React, { useState } from 'react'
import './list.css'

const To_Do_List = () => {
    const [task, settask] = useState('')
    const [tasks, settasks] = useState([])

    const add_task = () => {
        if (task.trim() === '') {
            alert("Bosrey k Task to add karo")
            return
        }
        settasks([...tasks, task])
        settask('')
    }

    const delete_task = (index) => {
        const upgrade_task = tasks.filter((item, i) => i !== index)
        settasks(upgrade_task)

    }

    return (
        <>
            <div className="todo-container">
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Enter a Task"
                        value={task}
                        onChange={(e) => settask(e.target.value)}
                    />
                    <button onClick={add_task}>+</button>
                </div>

                <ul>
                    {tasks.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => delete_task(index)}>❌</button>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default To_Do_List




// ________________________
// import React, { useState } from "react";

// const TodoApp = () => {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   // Add Task
//   const addTask = () => {
//     if (task.trim() === "") {
//       alert("Please enter a task");
//       return;
//     }

//     setTasks([...tasks, task]);
//     setTask("");
//   };

//   // Delete Task
//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div style={{ width: "300px", margin: "50px auto" }}>
//       <h2>To-Do List</h2>

//       <input
//         type="text"
//         value={task}
//         placeholder="Enter task"
//         onChange={(e) => setTask(e.target.value)}
//       />

//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => deleteTask(index)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;
