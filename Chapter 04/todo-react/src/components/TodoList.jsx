import TodoItem from "./TodoItem";

function TodoList({ todos }) {

  return (
    <ul className="space-y-3">

        {/* React dùng .map() để render danh sách. */}
      {todos.map((todo) => (
        // Key giúp React nhận diện từng phần tử trong list để tối ưu render.
        <TodoItem key={todo.id} todo={todo} />
      ))}

    </ul>
  );
}

export default TodoList;