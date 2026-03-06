import {useEffect, useState} from "react";
import axios from "axios";
import PostCard from "./PostCard.jsx";

const PostList = () => {
    // Xác định trạng thái đang lấy dữ liệu
    const [isLoading, setIsLoading] = useState(false);
    // Lưu danh sách posts nhận từ API
    const [posts, setPosts] = useState([]);
    // Lưu trữ thông báo lỗi nếu có
    const [error, setError] = useState("");

    // useEffect chạy 1 lần duy nhất khi component được mount
    useEffect(() => {
        setIsLoading(true); // bắt đầu lấy dữ liệu -> UI hiển thị "Đang tải"
        // axios.get("https://dummyjson.com/posts")
        //     .then(res => {
        //         // lấy ra mảng posts trong dữ liệu trả về từ API và lưu vào state posts
        //         setPosts(res.data.posts);
        //         setIsLoading(false);
        //     })
        //     .catch(err => {
        //         setError(err.message);
        //         setIsLoading(false);
        //     });
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    return (
        <section>
            <h2>Posts</h2>
            <div className="post-container">
                {isLoading ? <p>Đang lấy dữ liệu...</p> :
                    error !== "" ? <p>Có lỗi khi lấy dữ liệu: {error}</p> :
                        posts.map(post => <PostCard key={post.id} post={post}/>)
                }
            </div>
        </section>
    )
}
export default PostList
