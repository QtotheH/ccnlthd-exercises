import {Link} from "react-router";
const MovieCard = ({movie, category}) => {
    return (
        <div className="card">
            <Link to={`/movies/detail/${movie.id}`} className="movie-card-link">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title}/>
                <h3>{movie.title} ({movie.original_title})</h3>
                <p>Ngày ra mắt: {movie.release_date}</p>
                {category === "popular" ?
                    <p>Độ phổ biến: {movie.popularity}</p> :
                    <p>Điểm: {movie.vote_average}</p>
                }
            </Link>
        </div>
    )
}
export default MovieCard
