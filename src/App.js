import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./components/Column";
import AddTask from "./components/AddTask";
import { fetchStatuses } from "./API/statuses";
import { fetchTasks } from "./API/tasks";

function App() {
  const dispatch = useDispatch();
  const statuses = useSelector(state => state.statuses);


  useEffect(() => {
    dispatch(fetchStatuses());
    dispatch(fetchTasks());
  }, [dispatch]);


  return (
      <div className="App">
        <div className="container">
          <h1 className="col">Kanban board</h1>
          <AddTask />
          <div className="row">
            {statuses.map(status => (
                <Column
                    key={status._id}
                    status={status}
                />
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
