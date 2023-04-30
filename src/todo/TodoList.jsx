import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const todolist = useSelector((state) => state.todoList.users);
  return (
    <>
      {todolist?.map((user, i) => {
        return (
          <div className="max-w-sm mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={i}>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {user?.title}
            </h1>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {user.discription}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
