import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEdit(false);
  };

  const toggledTodo = () => {
    toggleTodo(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggledTodo}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEdit ? "border-black/10 px-2" : "border-transparent"
        }`}
        readOnly={!isEdit}
        onChange={(e) => setTodoMsg(e.target.value)}
        value={todoMsg}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isEdit) {
            editTodo();
          } else {
            setIsEdit((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isEdit ? "📁" : "✏️"}
      </button>
      <button
        className="nline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
