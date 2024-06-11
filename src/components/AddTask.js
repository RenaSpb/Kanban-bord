import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../API/tasks';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const newTask = {
            name: taskName,
            description: taskDescription
        };
        dispatch(addTask(newTask));
        setTaskName('');
        setTaskDescription('');
        setShowModal(false);
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-success add-task-button btn-lg"
                onClick={() => setShowModal(true)}
            >
                Add Task
            </button>

            {showModal && (
                <div className="modal show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Task</h5>
                                <button
                                    type="button"
                                    className="btn-close "
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Task Name"
                                        value={taskName}
                                        onChange={(e) => setTaskName(e.target.value)}
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <textarea
                                        className="form-control description-textarea"
                                        placeholder="Task Description"
                                        value={taskDescription}
                                        onChange={(e) => setTaskDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success "
                                    onClick={handleAddTask}
                                >
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddTask;
