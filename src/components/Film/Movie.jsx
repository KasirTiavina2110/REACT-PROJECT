import PropTypes from 'prop-types';

// Movie est un composant fonctionnel qui affiche les détails d'un film.
const Movie = ({ movie, selectMovie }) => {
    // Chemin de base pour les images des films
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

    return (
        // Lorsque l'utilisateur clique sur le composant Movie, on appelle la fonction selectMovie avec le film en paramètre
        <div onClick={() => selectMovie(movie)} className="movie">
            <div className="movie-title">
                {/* Si le film a un chemin d'affiche, on affiche l'image */}
                {movie.poster_path && <img src={IMAGE_PATH + movie.poster_path} alt={movie.title} />}
                <div className="flex between movie-infos">
                    {/* Titre du film */}
                    <h5 className="movie-title">{movie.title}</h5>
                    {/* Si le film a une note, on l'affiche par une expression ternaire*/}
                    {movie.vote_average ? <span className="movie-voting">{movie.vote_average}</span> : null}
                </div>
            </div>
        </div>
    );
};

// Spécification des types des props attendues par le composant Movie
Movie.propTypes = {
    // movie doit être un objet et est requis
    movie: PropTypes.object.isRequired,
    // selectMovie doit être une fonction et est requise
    selectMovie: PropTypes.func.isRequired
};

export default Movie;
/*READ ME pour faire passer des donnees dans des props*/
/*
Le composant Movie reçoit deux props : movie et selectMovie.
movie contient les détails d'un film, tels que le titre, le chemin de l'affiche et la note.
selectMovie est une fonction qui est appelée lorsque l'utilisateur clique sur le composant Movie. Cette fonction prend le film sélectionné en paramètre.
Le chemin de base pour les images des films est stocké dans la constante IMAGE_PATH.
Le composant affiche le titre du film, l'affiche (si disponible) et la note du film (si disponible).
Les types des props attendues par le composant Movie sont spécifiées à l'aide de PropTypes pour assurer une meilleure validation et documentation du code.
 */