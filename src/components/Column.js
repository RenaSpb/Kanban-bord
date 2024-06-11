import React from 'react';
import { useSelector } from "react-redux";
import Task from "./Task";

const Column = (props) => {
    const tasks = useSelector(state => {
        const filteredTasks = state.tasks.filter(el => el.status === props.status.title);
        console.log(`Tasks for ${props.status.title}:`, filteredTasks);
        return filteredTasks;
    });

    const columnColors = {
        "To do": "#f9e6e6",
        "In progress": "#f5eefb",
        "Review": "#f9f9e5",
        "Done": "#eafeee"
    };

    const columnColor = columnColors[props.status.title] || "#ffffff";

    return (
        <div className="col">
            <h3 className="column-title">{props.status.title}</h3>
            {tasks.map(task => <Task key={task._id} task={task} color={columnColor} />)}
        </div>
    );
};

export default Column;
