import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Create = () => {
  const [task, setTask] = useState("");
  const navigate = useNavigate()

  const createTask = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task:task,
      })
    };

    const response = await fetch("http://127.0.0.1:8000/api/create/", options);
    const data = await response.json();
    console.log(data);
    navigate("/")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask();
  };

  return (
    <>
      <NavBar/>
      <form onSubmit={handleSubmit}>
        <div className="lg:w-1/2 md:w-2/3 p-10 font-dtr">
          <div className="flex flex-wrap">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-xl text-black">
                  Task
                </label>
                <input
                  onChange={(e) => {
                    setTask(e.target.value);
                  }}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex text-white bg-red-950/50 border-0 py-2 px-8 focus:outline-none hover:bg-red-900/50 rounded text-lg">
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Create;
