axios.post('https://kanban-server1.vercel.app/tasks', {
    "name": taskName,
    "description": taskDescription,
    "status": "To do",
    "priority": taskPriority,
    "__v": 0
})
    .then(res => {
        console.log(res.data)
        setTaskName('')
        setTaskDescription('')
        setTaskPriority(1)
        toggleModal('close', '')
        getTasks()

    })
    .catch(err => console.log(err))