import {UserContext} from "../contexts/UserContext.jsx";
import {useContext} from "react";

const Profile = () => {
    const {username, isLoggedIn, logout} = useContext(UserContext);

    // Nếu user đã đăng nhập thì hiển thị component này
    if (!isLoggedIn) return null;

    return (
        <div>
            <h2>Xin chào, {username}!</h2>
            <p>Bạn đã đăng nhập thành công vào hệ thống.</p>
            <div>
                <span>Tên người dùng: </span>
                <span>{username}</span>
            </div>
            <div>
                <span>Trạng thái: </span>
                <span>
                   Đang hoạt động
                </span>
            </div>
            <button onClick={logout}>
                Đăng xuất
            </button>
        </div>
    );
}
export default Profile
