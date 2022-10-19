import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { useList } from "../hooks/useList"

const TaskList = () => {

    const tasks = useList([]);

    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        tasks.push(task);
        setTask("");
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label> Task: </label>
                <input type="text" value={task} onChange={ handleChange } placeholder="Add Task" />
                <button type="submit">Create Task</button>
            </form>
            <button type="button" onClick={ () => tasks.sortasc() }> ☝🏻 sort </button>
            <button type="button" onClick={ () => tasks.sortdesc() }> 👇🏻 sort </button>
            { tasks.isEmpty() ? (<p>Task is empty</p> )
                :
                <ul>
                    {tasks.value.map((task, index) => (
                        <li key={ index }>{ task } {" "}
                            <button type="button" onClick={ () => tasks.remove(index) }>
                                🗑 </button>
                        </li>
                    ))}
                </ul>
            }
            <button type="button" onClick={ () => tasks.clear() }> 🗑 All </button>
        </div>
    )
}

export const HookPersonalizado = () => {

    const { value, increment, decrement, reset, increment5 } = useCounter(0)

    return (
        <div>
            <h1>Hooks Personalizados</h1>
            <h2>Hook Contador</h2>
            <div style={{ border: "1px solid" }}>
                <button onClick={ increment }> + </button>
                <p>Valor del contador: { value }</p>
                <button onClick={ decrement }> - </button>
                <br />
                <button onClick={ increment5 }>Increment * 5</button>
                <br />
                <button onClick={ reset }>Reset</button>
            </div>
            <h2>Hook Lista</h2>
            <div style={{ border: "1px solid" }}>
                <TaskList />
            </div>
        </div>
    )
}