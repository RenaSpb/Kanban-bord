import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changePriority, changeStatus, deleteTask } from "../API/tasks";
import { ArrowDown, ArrowLeft, ArrowUp, ArrowRight, Trash2, FilePenLine } from 'lucide-react';
import '../App.css';
import EditTask from './EditTask';

const Task = (props) => {
    const { task, color } = props;
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const statuses = useSelector(state => state.statuses);
    const taskStyle = {
        '--task-color': color
    };

    const onChangeStatus = (move) => {
        const statusesStringArray = statuses.map(status => status.title);
        const indexStatus = statusesStringArray.indexOf(task.status);
        const newIndexStatus = indexStatus + move;
        const newStatus = statusesStringArray[newIndexStatus];

        dispatch(changeStatus(task._id, newStatus));
    };

    const onPriorityUp = () => {
        if (task.priority < 10) {
            dispatch(changePriority(task._id, task.priority + 1));
        }
    };
    const onPriorityDown = () => {
        if (task.priority > 1) {
            dispatch(changePriority(task._id, task.priority - 1));
        }
    };

    const onDeleteTask = () => {
        dispatch(deleteTask(task._id));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
    };

    return (
        <div className="card task-card" style={taskStyle}>
            <EditTask
                task={task}
                show={isEditing}
                onClose={handleCloseEdit}
            />
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>

                <div className="card-subtitle mb-2 text-muted">
                    <ArrowUp disabled={task.priority >= 10} className="cursor" onClick={onPriorityUp} />

                    {' '} Priority:  {task.priority} {' '}
                    <ArrowDown disabled={task.priority <= 1} className="cursor" onClick={onPriorityDown} />
                </div>
                <p className="card-text">{task.description}</p>
                <div className="centered">
                    <ArrowLeft
                        disabled={task.status === statuses[0].title}
                        onClick={() => onChangeStatus(-1)}
                        className="cursor" />
                    <Trash2 onClick={onDeleteTask} />
                    <FilePenLine onClick={handleEditClick} />
                    <ArrowRight
                        disabled={task.status === statuses[statuses.length - 1].title}
                        onClick={() => onChangeStatus(+1)}
                        className="cursor" />
                </div>
            </div>
        </div>
    );
};

export default Task;
