// TaskList.js
import React, { useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Task List</h1>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((t, i) => (
                    <li key={i}>
                        {t}
                        <button onClick={() => deleteTask(i)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
