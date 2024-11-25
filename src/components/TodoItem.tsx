import { Todo } from "../types/todo";

interface TotoItemsProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

function TodoItem({ todo, onCompletedChange }: TotoItemsProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border border-gray-400 bg-white hover:bg-slate-100 rounded-md p-2">
        <input
          className="scale-125"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "line-through text-gray-600" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}

export default TodoItem;
