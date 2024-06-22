import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Serie.css";
import axios from "axios";
import Tv from "../../components/Serie/Tv";
import Youtube from "react-youtube";
import ZoomSerie from "../Page/ZoomSerie"; 
import { Modal } from "react-bootstrap"; 

function Serie() {
  const tv_API = "https://api.themoviedb.org/3/";
  const SEARCH_API = tv_API + "search/tv";
  const DISCOVER_API = tv_API + "discover/tv";
  const API_KEY = "56e02ec9c736c3424aa734bd01bcffc9";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [tvs, setTvs] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [tv, setTv] = useState({ title: "Serie en chargement" });
  const [showModal, setShowModal] = useState(false); // affichage modal
  const [selectedtv, setSelectedTv] = useState(null); // Voir si on a checker un Id tv ou pas

  useEffect(() => {
    fetchTousLesSeries();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // mettre dans un tableau pour acceullir les datas de Tmdb

  const fetchTousLesSeries = async (event) => {
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
    setTvs(data.results);
    setTv(data.results[0]);

    if (data.results.length) {
      await fetchSerieById(data.results[0].id);
    }
  };

  const fetchSerieById = async (id) => {
    const { data } = await axios.get(`${tv_API}tv/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find((vid) => vid.name === "Official Trailer");
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }

    setTv(data);
  };

  const selectTv = (tv) => {
    fetchSerieById(tv.id);
    setPlaying(false);
    setTv(tv);
    window.scrollTo(0, 0);
  };

  const renderTvs = () =>
    tvs.map((tv) => (
      <div key={tv.id}>
        <Tv selectTv={selectTv} tv={tv} />
        {/* Add button to open modal */}
        <button className="btn btn-primary" onClick={() => openModal(tv)}>Voir plus</button>
      </div>
    ));

  const openModal = (tv) => {
    setSelectedTv(tv);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedTv(null);
    setShowModal(false);
  };

  return (
    <div className="App_Serie">
      <header className="header">
        <span className="brand">Liste des Series</span>
        <form className="form" onSubmit={fetchTousLesSeries}>
          <input className="form-control search" type="text" id="search" onInput={(event) => setSearchKey(event.target.value)} />
          <button className="btn btn-primary submit-search" type="submit">
            <i className="fa fa-search"></i> Rechercher
          </button>
        </form>
      </header>
      {tvs.length ? (
        <main>
          {tv ? (
            <div className="poster" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${tv.backdrop_path})` }}>
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
                    <h1>{tv.original_name}</h1>
                    <p>{tv.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
          <div className="container_Serie">{renderTvs()}</div>
        </main>
      ) : (
        "Désolé, la serie n'apparaît pas dans notre base de données"
      )}
      
      {/* Modal for displaying tv details */}
      {selectedtv && (
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedtv.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ZoomSerie // Importe props ZoomSerie
              name={selectedtv.name}
              poster_path={selectedtv.poster_path}
              vote_average={selectedtv.vote_average}
              release_date={selectedtv.release_date}
              overview={selectedtv.overview}
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

export default Serie;
