import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {

  // State dùng để lưu dữ liệu thay đổi theo thời gian - lưu danh sách công việc.
  const [todos, setTodos] = useState([
    { id: 1, title: "Học React", completed: false },
    { id: 2, title: "Làm bài tập React", completed: true },
    { id: 3, title: "Đọc tài liệu JSX", completed: false }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-6 rounded-lg shadow w-[400px]">

        {/* JSX -> h1 Nhưng thực chất nó là: React.createElement("h1", null, "Todo List") */}
        <h1 className="text-2xl font-bold mb-4 text-center">
          Todo List
        </h1>
        {/* Props: todos được truyền từ App -> TodoList */}
        <TodoList todos={todos} />

      </div>

    </div>
  );
}

export default App;