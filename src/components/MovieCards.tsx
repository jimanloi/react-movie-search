import { useSearchMoviesQuery } from "../api/apiSlice";
import type { Movie } from "../types";
import "./movieCards.css";
import defaultPoster from "../assets/default_poster.jpg";
import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const MovieCards = ({ searchQuery }: { searchQuery: string }) => {
  const { data, error, isLoading } = useSearchMoviesQuery(searchQuery);

  if (isLoading) return <p>Loading movies...</p>;
  if (error) return <p>Error fetching movies</p>;

  return (
    <div className="movie-container">
      {data?.results.map((movie: Movie) => (
        <div key={movie.id} className="movie-card">
          <h5>{movie.title}</h5>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultPoster
            }
            alt={movie.title}
          />
          <div className="movie-description">
            <span>
              <MdDateRange style={{ marginBottom: 4 }} /> {movie.release_date}
            </span>
            <span>
              <FaStar style={{ marginBottom: 4 }} /> {movie.vote_average}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCards;
