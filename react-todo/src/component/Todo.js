import React, { useState } from "react";
import './ToDo.css'
import { toast, ToastContainer } from 'react-toastify';
import FooterComponent from "./FooterComponent";
function ToDo() {

    // adding a task
    const [tasksAdded, setInput] = useState("")
    const handleChange = (event) => {
        setInput(event.target.value)
    }

    // storing the task on form submit
    const [tasks, setTasks] = useState([])
    const storeTask = (event) => {
        event.preventDefault();

        if (tasksAdded.trim() !== "") {
            setTasks([...tasks, tasksAdded])
            // creates a new array by spreading the elements of the existing tasks array and then adding the tasksAdded at the end.
            setInput("")  // making the input field empty after form submitted
            toast.success(`Task "${tasksAdded}" added successfully!`);
        }
    }

    // task completed
    const [tasksCompleted, setTasksCompleted] = useState([])
    const taskCompleted = (index) => {
        const allTasks = [...tasks]
        const newCompletedTask = allTasks.splice(index, 1)[0];
        setTasks(allTasks)
        setTasksCompleted([...tasksCompleted, newCompletedTask])
        toast.success(`Task "${newCompletedTask}" completed successfully!`);
    }


    // delete from tasks to be done
    const deleteTask = (index) => {
        const allTasks = [...tasks]
        const taskDeletd = allTasks.splice(index, 1)[0]
        setTasks(allTasks)
        toast.success(`Task "${taskDeletd}" deleted successfully!`);

    }


    // Inside deleteFromCompletedTask function
    const deleteFromCompletedTask = (index) => {
        const allCompletedTasks = [...tasksCompleted];
        const deletedFromCompletedTasks = allCompletedTasks.splice(index, 1)[0];
        setTasksCompleted(allCompletedTasks);

        toast.success(`Task "${deletedFromCompletedTasks}" deleted from completed tasks`);
    };

    // editing the task
    const [editIndex, setEditIndex] = useState(-1); // Index of the task being edited
    const [editedTask, setEditedTask] = useState(""); // Value of the edited task


    const editTask = (index) => {
        setEditIndex(index);
        setEditedTask(tasks[index]); // Set initial value of the edited task
    }

    const saveEditedTask = (index) => {
        const allTasks = [...tasks];
        allTasks[index] = editedTask; // Update the task at the specified index
        setTasks(allTasks);
        setEditIndex(-1); // Clear edit state
        setEditedTask(""); // Clear edited task value
        toast.success("Task edited successfully!");
    }

    const currentdate = new Date().toLocaleString()

    return (
        <div className="todo-container" onSubmit={storeTask}>

            <form className="input-section" >

                <h1>To-Do App</h1>
                <h4>{currentdate}</h4>

                <div className='input-container'>
                    <input type="text" placeholder="Enter the task.." value={tasksAdded} onChange={handleChange} />
                    <button type="submit"> Submit</button>
                </div>

            </form>

            <div className="cent">
                <div style={{ width: 330 }}>
                    {/*  displaying all the tasks wwhich are stored  */}

                    {tasks.length > 0 &&
                        <ul>
                            <h1>Tasks to be done:</h1>
                            {tasks.map((task, index) => (
                                <li key={index}>
                                    {
                                        editIndex === index
                                            ?
                                            (
                                                <div className="input-container">
                                                    <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
                                                    <button onClick={() => saveEditedTask(index)}>Save</button>
                                                </div>
                                            )
                                            :
                                            (
                                                <div className="cent">
                                                    <div>
                                                        {task}
                                                    </div>
                                                    <div>
                                                        <i className="fa-solid fa-check" style={{ color: 'white' }} onClick={() => taskCompleted(index)} ></i>
                                                        <i className="fa-solid fa-pen-to-square" style={{ color: 'white' }} onClick={() => editTask(index)} ></i>
                                                        <i className="fa-solid fa-trash" style={{ color: 'white' }} onClick={() => deleteTask(index)}></i>
                                                    </div>

                                                </div>
                                            )
                                    }
                                </li>
                            ))}
                        </ul>
                    }

                </div>
                <div style={{ width: 330 }}>
                    {/*  displaying all the completed tasks   */}
                    {tasksCompleted.length > 0 &&
                        <ul>
                            <h1>Completed Tasks:</h1>
                            {tasksCompleted.map((tasksDone, index) => (
                                <li key={index}>
                                    <div className="cent">
                                        <div>
                                            {tasksDone}
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-trash" style={{ color: 'white' }} onClick={() => deleteFromCompletedTask(index)} />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
            < FooterComponent />
        </div>





    )

}


export default ToDo;