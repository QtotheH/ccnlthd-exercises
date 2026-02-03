import MovieCard from "./MovieCard.jsx";
import {movieCategory} from "../MovieData.js";

import {Link, useNavigate, useParams} from "react-router";
const MovieDiscovery = () => {
    // Dùng hook useParams() đề lấy giá trị Optional Segment 'category' từ URL
    const { category } = useParams();
    const currentCategory = category || 'popular';
    // Lấy danh sách phim theo category đã chọn
    const movies = movieCategory[currentCategory] || movieCategory['popular'];
    // Hook useNavigate cho phép điều hướng người dùng đến route khác thông qua hàm navigate
    const navigate = useNavigate();
    return (
        <>
            <h1>Movie Discovery</h1>
            <div className="button-link-group">
                <Link to="/movies" className="button-link">Popular</Link>
                <Link to="/movies/top-rated" className="button-link">Top Rated</Link>
            </div>
            <h4>Tiêu chí hiện tại: {currentCategory.toLocaleUpperCase()}</h4>

            <div style={
                {display: "flex", justifyContent: "center", marginBottom: "1rem"}}
            >
                <div style={{ maxWidth: "1280px", display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {movies.map((m, index) =>
                        <MovieCard movie={m} category={currentCategory} key={index} />
                    )}
                </div>
            </div>

            <div>
                <button className="back-to-home" onClick={() => navigate("/")}>Trở về HOME</button>
            </div>
        </>
    )
}
export default MovieDiscovery