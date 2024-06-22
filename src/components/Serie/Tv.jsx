import PropTypes from 'prop-types';

// tv est un composant fonctionnel qui affiche les détails d'un film.
const Tv = ({ tv, selectTv }) => {
    // Chemin de base pour les images des films
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

    return (
        // Lorsque l'utilisateur clique sur le composant tv, on appelle la fonction selecttv avec le film en paramètre
        <div onClick={() => selectTv(tv)} className="tv">
            <div className="tv-title">
                {/* Si la serie a un chemin d'affiche, on affiche l'image */}
                {tv.poster_path && <img src={IMAGE_PATH + tv.poster_path} alt={tv.name} />}
                <div className="flex between tv-infos">
                    {/* Titre du film */}
                    <h5 className="tv-title">{tv.name}</h5>
                    {/* Si la serie a une note, on l'affiche par une expression ternaire*/}
                    {tv.vote_average ? <span className="tv-voting">{tv.vote_average}</span> : null}
                </div>
            </div>
        </div>
    );
};

// Spécification des types des props attendues par le composant tv
Tv.propTypes = {
    // tv doit être un objet et est requis
    tv: PropTypes.object.isRequired,
    // selecttv doit être une fonction et est requise
    selectTv: PropTypes.func.isRequired
};

export default Tv;
/*READ ME pour faire passer des donnees dans des props*/
/*
Le composant tv reçoit deux props : tv et selecttv.
tv contient les détails d'un film, tels que le titre, le chemin de l'affiche et la note.
selecttv est une fonction qui est appelée lorsque l'utilisateur clique sur le composant tv. Cette fonction prend le film sélectionné en paramètre.
Le chemin de base pour les images des films est stocké dans la constante IMAGE_PATH.
Le composant affiche le titre du film, l'affiche (si disponible) et la note du film (si disponible).
Les types des props attendues par le composant tv sont spécifiées à l'aide de PropTypes pour assurer une meilleure validation et documentation du code.
 */