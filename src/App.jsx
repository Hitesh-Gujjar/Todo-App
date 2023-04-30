import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./todo/TodoList";
import CreateTodoForm from "./todo/createTodoForm";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="grid grid-flow-row auto-rows-max">
            <div className="">
              <CreateTodoForm></CreateTodoForm>
            </div>
            <div className="mt-6">
              <TodoList></TodoList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
