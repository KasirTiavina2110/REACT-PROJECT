import PropTypes from 'prop-types';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const ZoomSerie = ({ name, poster_path, vote_average, release_date, overview }) => {
    return (
        <div>
            <img className="card-img-top" style={{ width: '14rem' }} src={API_IMG + poster_path} alt="Movie Poster" />
            <h3>{name}</h3>
            <h4>Note du public: {vote_average}</h4>
            <h5>Date de sortie: {release_date}</h5>
            <br />
            <h6>Synopsis</h6>
            <p>{overview}</p>
        </div>
    );
}

ZoomSerie.propTypes = {
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
};

export default ZoomSerie;
