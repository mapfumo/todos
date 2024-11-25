import { dummyData } from "./data/todos";
import TodoItem from "./components/TodoItem";
import React from "react";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = React.useState(dummyData);

  function setToDoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, title, completed: false },
    ]);
  }
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-200 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem todo={todo} onCompletedChange={setToDoCompleted} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
