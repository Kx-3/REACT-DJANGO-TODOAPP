import { useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [data, setData] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/");
    const data = await res.json();
    console.log(data)
    setData(data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
      <>
        <NavBar/>
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((task) => {
              return (
                <TaskCard
                  task={task}
                  fn={fetchTasks}
                />
              );
            })}
          </div>
        </div>
      </>
  );
}

export default App;
