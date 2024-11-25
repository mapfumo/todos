interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);
  if (completedTodos.length > 0) {
    return (
      <div className="text-center space-y-2">
        <p className="text-sm font-medium">
          {completedTodos.length}/{todos.length} todos completed
        </p>
        {completedTodos.length > 0 && (
          <button
            onClick={deleteAllCompleted}
            className="bg-red-500 text-white hover:underline text-sm font-medium"
          >
            Delete all completed
          </button>
        )}
      </div>
    );
  }
}
