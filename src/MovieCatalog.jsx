import { useSearchParams } from "react-router-dom";

const MovieCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    genre: "",
    rating: "",
    year: "",
  });

  const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: "8.8", year: "2010" },
    { title: "Interstellar", genre: "Sci-Fi", rating: "8.6", year: "2014" },
    { title: "The Dark Knight", genre: "Action", rating: "9.0", year: "2008" },
    { title: "The Godfather", genre: "Crime", rating: "9.2", year: "1972" },
  ];

  const genre = searchParams.get("genre");
  const rating = searchParams.get("rating");
  const year = searchParams.get("year");

  const filteredMovie = movies.filter((movie) => {
    return (
      (genre
        ? movie.genre.toLowerCase().includes(genre.toLowerCase())
        : true) &&
      (rating ? movie.rating.includes(rating) : true) &&
      (year ? movie.year.includes(year) : true)
    );
  });

  return (
    <div>
      <h1>Movie Catalog</h1>
      <ul>
        {filteredMovie.map((movie, index) => (
          <li key={index}>
            {movie.title} - Genre: {movie.genre} - Rating: {movie.rating} -
            Year: {movie.year}
          </li>
        ))}
      </ul>
      <label>Genre: </label>
      <br />
      <input
        type="text"
        value={genre}
        onChange={(e) =>
          setSearchParams((prev) => {
            prev.set("genre", e.target.value);
            return prev;
          })
        }
      />
      <br />
      <br />
      <label>Rating: </label>
      <br />
      <input
        type="text"
        value={rating}
        onChange={(e) =>
          setSearchParams((prev) => {
            prev.set("rating", e.target.value);
            return prev;
          })
        }
      />
      <br />
      <br />
      <label>Year: </label>
      <br />
      <input
        value={year}
        type="text"
        onChange={(e) =>
          setSearchParams((prev) => {
            prev.set("year", e.target.value);
            return prev;
          })
        }
      />
      <br />
      <br />
    </div>
  );
};

export default MovieCatalog;
