import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todos";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setToDoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), title, completed: false },
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((preveTodos) => preveTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompleted() {
    setTodos((preveTodos) => preveTodos.filter((todo) => !todo.completed));
  }

  return {
    todos,
    setTodos,
    setToDoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted,
  };
}
