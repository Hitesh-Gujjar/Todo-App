import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUSer } from "../redux/todoList";

function CreateTodoForm() {
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todoList.users);
  const [user, setUser] = useState({
    title: "",
    discription: "",
  });
  let listId = todolist.length + 1;

  const handleForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      ["id"]: listId,
    });
  };

  return (
    <div className="">
      <div className="text-2xl font-bold">
        <h1>Create Note</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="title"
              className="block w-full rounded-lg py-1 px-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
          placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
          focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={user.title}
              onChange={(e) => handleForm(e)}
              placeholder="Title"
            ></input>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            discription
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="discription"
              className="block w-full rounded-lg px-2  py-1 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
          placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
          focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={user.discription}
              onChange={(e) => handleForm(e)}
              placeholder="discription"
            ></input>
          </div>
        </div>

        <div className="sm:col-span-3">
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            onClick={() => {
              dispatch(addUSer(user));
              setUser({});
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTodoForm;
