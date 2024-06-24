import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Naruto.css'; // Assurez-vous d'importer le fichier CSS

// Importez la vidéo
import hokageVideo from '../../assets/images/hokage.mp4';

function Naruto() {
  const [characters, setCharacters] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(3); // Nombre de personnages par page

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        const data = await response.json();
        setCharacters(data.characters);
      } catch (error) {
        console.error("Erreur de données:", error);
      }
    }

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredCharacters.length / charactersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchKey(event.target.value);
  };

  const renderCharacters = () => {
    return currentCharacters.map((character) => (
      <div key={character.name} className="naruto-card">
        <Link to={`/Personnage/${character.id}`}>
          <img
            src={
              character.images[0] === "https://static.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.png"
                ? ""
                : character.images[0]
            }
            className="naruto-card-img-top"
            alt="character image"
          />
        </Link>
        <div className="naruto-card-body">
          <p className="naruto-card-text">Nom du personnage: {character.name}<br />Appartenant au clan : {character.personal.clan}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        >
          <source src={hokageVideo} type="video/mp4" />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
          <div className="naruto-content">
            <h1 className="naruto-h1 p-5">Personnage dans Naruto</h1>
            <div className="naruto-searchbar">
              <form className="mx-auto" action="">
                <input type="text" placeholder="Entrez le nom du personnage à rechercher" onChange={handleSearchChange} />
              </form>
            </div>
            <div className="naruto-container-fluid d-flex flex-wrap justify-content-evenly gap-5">
              {renderCharacters()}
            </div>
            <div className="naruto-pagination">
              <button onClick={prevPage}>Précédent</button>
              <button onClick={nextPage}>Suivant</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Naruto;
