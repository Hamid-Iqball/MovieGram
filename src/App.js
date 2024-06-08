import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      {/* Nav Bar */}
      <nav className="flex flex-col space-y-4 md:space-y-0 p-4 md:flex-row md:justify-between md:items-center bg-yellow-400 text-yellow-800 shadow-md ">
        <div className="flex space-x-2 text-center p-2">
          <span className="text-3xl">🍿</span>
          <h1 className="font-bold text-3xl tracking-wide">MovieGram</h1>
        </div>
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" text-neutral-900 rounded-xl border-0 pl-4 p-2  mr-4 md:p-1  bg-yellow-100 md:w-1/3"
        />
        <p className="text-center text-xl p-2">
          Found <strong>{movies.length} </strong> movies
        </p>
      </nav>

      {/* Main */}
      <main className="h-screen mx-auto bg-yellow-100 ">
        {/* box-1 */}
        <section className=" md:w-3/4 h-screen my-0 mx-auto grid sm:grid-cols-2 grid-cols-1">
          <div className=" bg-yellow-200 m-4  rounded-xl text-yellow-800 relative">
            <button
              onClick={() => setIsOpen1((open) => !open)}
              className="absolute top-2 right-2 p-4 h-4 w-5 text-center  bg-yellow-50"
            >
              {!isOpen1 ? "-" : "+"}
            </button>

            {!isOpen1 && (
              <ul className=" list-none  ">
                {movies.map((movie) => (
                  <li
                    key={movie.imdbID}
                    className=" grid grid-cols-2 pl-6 pt-3 pb-1 border-b-2  my-0 mx-auto"
                  >
                    <div className="col-span-1 row-span-1">
                      <img
                        src={movie.Poster}
                        alt={`${movie.Title}`}
                        className="w-20 h-30 object-cover"
                      />
                    </div>

                    <p className="flex flex-col justify-arround text-2xl  tracking-widest ">
                      <h3 className="mb-auto font-bold"> {movie.Title}</h3>
                      <p className="mt-0">
                        <span>🗓</span>
                        <span>{movie.Year}</span>
                      </p>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Box-2 */}
          <div className=" bg-yellow-200 m-4 rounded-xl relative">
            <button
              onClick={() => setIsOpen2((open) => !open)}
              className=" absolute top-2 right-2 h-2 w-2 rounded-full bg-yellow-50 text-xl font-bold"
            >
              {!isOpen2 ? "-" : "+"}
            </button>

            {!isOpen2 && <div> Hamid</div>}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
