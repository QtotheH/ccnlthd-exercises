import {UserContext} from "../contexts/UserContext.jsx";
import {useContext, useState} from "react";

const Login = () => {
    const { isLoggedIn, login } = useContext(UserContext);
    const [inputName, setInputName] = useState("");

    // Nếu user chưa đăng nhập thì hiển thị component này
    if (isLoggedIn) return null;

    return (
        <div>
            <h2>Đăng nhập</h2>
            <p>Nhập tên của bạn để đăng nhập vào hệ thống.</p>
            <input
                type="text"
                placeholder="Nhập tên người dùng..."
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login(inputName)}
            />
            <button onClick={() => login(inputName)}>
                Đăng nhập
            </button>
        </div>
    );
}
export default Login
