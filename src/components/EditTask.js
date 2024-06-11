import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../API/tasks';

const EditTask = ({ task, show, onClose }) => {
    const [taskName, setTaskName] = useState(task.name);
    const [taskDescription, setTaskDescription] = useState(task.description);

    const dispatch = useDispatch();

    const handleEditTask = () => {
        const updatedTask = {
            name: taskName,
            description: taskDescription,
        };
        dispatch(editTask(task._id, updatedTask));
        onClose();
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h5 className="modal-title">Edit Task</h5>
                        <form>
                            <div className="form-group">
                                <label>Task Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Task Description</label>
                                <textarea
                                    className="form-control description-textarea"
                                    value={taskDescription}
                                    onChange={(e) => setTaskDescription(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                        <button type="button" className="btn btn-success" onClick={handleEditTask}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTask;
