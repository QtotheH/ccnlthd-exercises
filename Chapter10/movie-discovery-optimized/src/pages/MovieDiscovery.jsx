import MovieCard from "./MovieCard.jsx";
import {movieCategory} from "../MovieData.js";
import {useMemo, useCallback} from 'react'

import {Link, useNavigate, useParams} from "react-router";
const MovieDiscovery = () => {
    const { category } = useParams();
    const currentCategory = category || 'popular';
    // useMemo: chỉ tính lại khi currentCategory thay đổi
    const movies = useMemo(() => {
        return movieCategory[currentCategory] || movieCategory["popular"];
    }, [currentCategory]);

    const navigate = useNavigate();
    // useCallback: hàm navigate được cache, không tạo mới mỗi render
    const handleBackToHome = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <>
            <h1>Movie Discovery - Optimized</h1>
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
                {/* Truyền hàm handleBackToHome đã được cache */}
                <button 
                    className="back-to-home" 
                    onClick={handleBackToHome}
                >
                    Trở về HOME
                </button>
            </div>
        </>
    )
}
export default MovieDiscovery