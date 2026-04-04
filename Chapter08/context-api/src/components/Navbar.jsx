import {useContext} from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const Navbar = () => {
    // Dùng useContext(UserContext) để lấy state từ UserContext
    const { username, isLoggedIn } = useContext(UserContext);

    return (
        <nav>
            <div>Context API Demo</div>
            <div>
                {isLoggedIn ? (
                    <span>👤 {username}</span>
                ) : (
                    <span>Chưa đăng nhập</span>
                )}
            </div>
        </nav>
    );
}
export default Navbar
