import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Film.css";
import axios from "axios";
import Movie from "../../components/Film/Movie";
import Youtube from "react-youtube";
import ZoomFilm from "../Page/ZoomFilm"; 
import { Modal } from "react-bootstrap"; 

function Film() {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const SEARCH_API = MOVIE_API + "search/movie";
  const DISCOVER_API = MOVIE_API + "discover/movie";
  const API_KEY = "56e02ec9c736c3424aa734bd01bcffc9";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [movie, setMovie] = useState({ title: "Film en chargement" });
  const [showModal, setShowModal] = useState(false); // affichage modal
  const [selectedMovie, setSelectedMovie] = useState(null); // Voir si on a checker un Id movie ou pas

  useEffect(() => {
    fetchTousLesFilms();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // mettre dans un tableau pour acceullir les datas de Tmdb

  const fetchTousLesFilms = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const { data } = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    console.log(data.results[0]);
    setMovies(data.results);
    setMovie(data.results[0]);

    if (data.results.length) {
      await fetchFilmById(data.results[0].id);
    }
  };

  const fetchFilmById = async (id) => {
    const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find((vid) => vid.name === "Official Trailer");
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }

    setMovie(data);
  };

  const selectMovie = (movie) => {
    fetchFilmById(movie.id);
    setPlaying(false);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  const renderMovies = () =>
    movies.map((movie) => (
      <div key={movie.id}>
        <Movie selectMovie={selectMovie} movie={movie} />
        {/* Add button to open modal */}
        <button className="btn btn-primary" onClick={() => openModal(movie)}>Voir plus</button>
      </div>
    ));

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  return (
    <div className="App_Film">
      <header className="header">
        <span className="brand">Liste des Films</span>
        <form className="form" onSubmit={fetchTousLesFilms}>
          <input className="form-control search" type="text" id="search" onInput={(event) => setSearchKey(event.target.value)} />
          <button className="btn btn-primary submit-search" type="submit">
            <i className="fa fa-search"></i> Rechercher
          </button>
        </form>
      </header>
      {movies.length ? (
        <main>
          {movie ? (
            <div className="poster" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})` }}>
              {playing ? (
                <>
                  <Youtube
                    videoId={trailer.key}
                    className="youtube amru"
                    containerClassName="youtube-container amru"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="btn btn-danger close-video">
                    Fermer
                  </button>
                </>
              ) : (
                <div className="center-max-size">
                  <div className="poster-content">
                    {trailer ? (
                      <button className="btn btn-primary play-video" onClick={() => setPlaying(true)} type="button">
                        Lancer Trailer
                      </button>
                    ) : (
                      "Désolé, aucun trailer disponible"
                    )}
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
          <div className="container_Film">{renderMovies()}</div>
        </main>
      ) : (
        "Désolé, le film n'apparaît pas dans notre base de données"
      )}
      
      {/* Modal for displaying movie details */}
      {selectedMovie && (
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMovie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ZoomFilm // Importe props ZoomFilm
              title={selectedMovie.title}
              poster_path={selectedMovie.poster_path}
              vote_average={selectedMovie.vote_average}
              release_date={selectedMovie.release_date}
              overview={selectedMovie.overview}
            />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={closeModal}>Fermer</button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Film;
