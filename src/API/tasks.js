import axios from "axios";

export const fetchTasks = () => {
    return (dispatch) => {
        axios.get('https://kanban-server1.vercel.app/tasks')
            .then((response) => {
                const tasks = response.data
                dispatch({                        //сразу делаем диспатч на месте
                    type: 'FETCH_TASKS',
                    payload: tasks,
                })
            })
            .catch(e => alert('Something went wrong. Try again later'))
    }
}

export const changePriority = (id, priority) => {
    return (dispatch) => {
        axios.patch(`https://kanban-server1.vercel.app/tasks/${id}`, {priority})
            .then((response) => {
                dispatch(fetchTasks())
            })
            .catch(e => alert('Something went wrong. Try again later'))
    }
}

export const changeStatus = (id, status) => {
    return (dispatch) => {
        axios.patch(`https://kanban-server1.vercel.app/tasks/${id}`, {status})
            .then((response) => {
                dispatch(fetchTasks())
            })
            .catch(e => alert('Something went wrong. Try again later'))
    }
}

export const addTask = (task) => {
    return (dispatch) => {
        axios.post(`https://kanban-server1.vercel.app/tasks`, {
            "name": task.name,
            "description": task.description,
            "status": "To do",
            "priority": 1,
            "__v": 0
        })
            .then((response) => {
                console.log('Task added successfully');
                dispatch(fetchTasks())
            })
            .catch(e => alert('Something went wrong'));
    }
}


export const deleteTask = (id) => {
    return (dispatch) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            axios.delete(`https://kanban-server1.vercel.app/tasks/${id}`)
                .then((response) => {
                    dispatch(fetchTasks())
                })
                .catch(e => alert('Something went wrong'));
        }
    }
}
export const editTask = (id, task) => {
    return (dispatch) => {
        axios.patch(`https://kanban-server1.vercel.app/tasks/${id}`, task)
            .then((response) => {
                dispatch(fetchTasks());
            })
            .catch(e => alert('Something went wrong. Try again later'));
    }
}