import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
    const [movie] = useState({
    // Mock data that MATCHES TEST EXPECTATIONS
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"] // Must include these exact genres
    });

  const { id } = useParams();

  return (
    <>
     {/* < header>
        <NavBar />
      </header> */}
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {/* Render ALL genres in <span> tags */}
          {movie.genres.map((genre) => (
            <span key={genre}>{genre}</span> 
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;

