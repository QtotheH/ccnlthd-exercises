import { movieCategory } from "../MovieData.js";
import {useNavigate, useParams} from "react-router";
const MovieDetail = () => {
    // Dùng hook useParams để lấy giá trị Dynamic Segment 'movieId'
    const { movieId } = useParams();

    const navigate = useNavigate();

    // Lấy thông tin phim dựa vào giá trị movieId
    const movie = Object.values(movieCategory)
            .flat()
            .find(m => m.id === Number(movieId));
    return (
        // Nếu phim có tồn tại thì hiển thị thông tin phim
        movie !== undefined ? (
            <>
                <h1>Movie Detail: Movie #{movieId}</h1>
                <div className="info-box">
                    <h2>Tên phim: {movie.title}</h2>
                    <h3>Tựa đề gốc: {movie.original_title}</h3>
                    <img src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} />
                    <p><strong>Tóm tắt</strong>: {movie.overview}</p>
                    <p>Ngày phát hành: {movie.release_date}</p>
                    <p>Điểm trung bình: {movie.vote_average}</p>
                    <p>Độ phổ biến: {movie.popularity}</p>
                </div>

                <div>
                    {/* Chuyển hướng về trang Movie Discovery khi người dùng nhấn nút */}
                    <button className="back-to-home" onClick={() => navigate("/movies")}>Trở về Movie Discovery</button>
                </div>
            </>
        ) :
        // Nếu phim không tồn tại:
        <h1>Phim không tồn tại!</h1>
    )
}
export default MovieDetail
