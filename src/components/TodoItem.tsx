import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TotoItemsProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onCompletedChange, onDelete }: TotoItemsProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border border-gray-400 bg-white hover:bg-slate-100 rounded-md p-2 grow">
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
      <button onClick={() => onDelete(todo.id)} className="text-gray-500">
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}

export default TodoItem;
