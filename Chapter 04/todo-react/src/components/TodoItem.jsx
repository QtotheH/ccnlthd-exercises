function TodoItem({ todo }) {

  return (
    <li className="p-3 border rounded flex justify-between">

      <span>
        {todo.title}
      </span>

      <span>

        {/* Conditional Rendering */}
        {todo.completed ? (
          <span className="font-bold text-green-500"> Hoàn thành</span>
        ) : (
          <span className="font-bold text-red-500"> Chưa xong</span>
        )}

      </span>

    </li>
  );
}

export default TodoItem;