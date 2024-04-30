import { useNavigate, Link } from "react-router-dom";

const TaskCard = ({ task, fn }) => {
  const deleteTask = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`http://127.0.0.1:8000/api/delete/${id}`, options);
    const data = await response.json();
    console.log(data);
    fn()
  };
  const markComplete = async (id) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: task.task,
        completed: true,
      }),
    };

    const response = await fetch(
      `http://127.0.0.1:8000/api/update/${id}`,
      options
    );
    const data = await response.json();
    console.log(data);
    fn();
  };
  return (
    <div class="p-4 w-full font-dtm">
      <div class="h-[20vh] flex flex-col justify-center bg-red-950/50 px-8 rounded-lg overflow-hidden relative text-black">
        <h2 class="text-3xl font-medium text-white mb-1">
          {task.task}
        </h2>
        {task.completed ? <div className="flex items-center gap-4"><div className="w-4 h-4 rounded-full bg-green-500"></div>Completed</div>:<div className="flex items-center gap-4"><div className="w-4 h-4 rounded-full bg-gray-500"></div>Not Completed</div>}
        <div className="flex my-3 justify-around">
          <button className="rounded-lg w-40 p-2 bg-slate-100 border border-green-500 text-green-500" onClick={() => markComplete(task.id)}>Mark as complete</button>
          <button className="rounded-lg w-40 p-2 bg-slate-100 text-black"><Link to={`/update/${task.id}`} state={task}>Update task</Link></button>
          <button className="rounded-lg w-40 p-2 bg-slate-100 border border-red-500 text-red-500" onClick={() => deleteTask(task.id)}>Delete task</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
