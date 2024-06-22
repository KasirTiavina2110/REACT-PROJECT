import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../css/Personnage.css";

export default function Personnage() {
  const { characterId } = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters');
        const data = await response.json();
        setCharacters(data.characters);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  useEffect(() => {
    console.log("Characters: ", characters);
    console.log("Character ID: ", characterId);
  }, [characters, characterId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const selectedCharacter = characters.find(
    (character) => character.id === parseInt(characterId) // Parse characterId to ensure type match
  );

  if (!selectedCharacter) {
    return <p>Ce personnage n est pas dans notre base de données.</p>;
  }

  return (
    <div className="personnage-container">
      <div className="personnage-header">
        <h1>{selectedCharacter.name}</h1>
        <Link to="/Naruto">
          <button className="personnage-back-button">Retour</button>
        </Link>
      </div>

      <div className="personnage-content">
        <div>
          <img
            src={
              selectedCharacter.images[0] ===
              "https://static.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.png"
                ? "https://tse1.mm.bing.net/th?id=OIP.Ynwl9SedTuHNYJWOc1SJSAHaEz&pid=Api"
                : selectedCharacter.images[0]
            }
            alt={selectedCharacter.name}
            className="personnage-image"
          />
        </div>
        <div>
          <div className="personnage-details">
            <h2>Famille</h2>
            <p>Père: <span>{selectedCharacter.family && selectedCharacter.family.father}</span></p>
            <p>Mère: <span>{selectedCharacter.family && selectedCharacter.family.mother}</span></p>
            <p>Sensei: <span>{selectedCharacter.family && selectedCharacter.family.godfather}</span></p>
          </div>

          <div className="personnage-details">
            <h2>Technics (Jutsu)</h2>
            <div className="jutsu-container">
              <ul>
                {selectedCharacter.jutsu.map((jutsu, index) => (
                  <li key={index}>{jutsu}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="personnage-details">
            <h2>Classification</h2>
            <p><span>{selectedCharacter.personal && selectedCharacter.personal.classification && selectedCharacter.personal.classification[0]}</span></p>
          </div>

          <div className="personnage-details">
            <h2>Personal</h2>
            <p>Taille: <span>{selectedCharacter.personal && selectedCharacter.personal.height && selectedCharacter.personal.height["Part I"]}</span></p>
            <p>Poids: <span>{selectedCharacter.personal && selectedCharacter.personal.weight && selectedCharacter.personal.weight["Part I"]}</span></p>
            <p>Anniversaire: <span>{selectedCharacter.personal.birthdate}</span></p>
            <p>Sexe: <span>{selectedCharacter.personal.sex}</span></p>
            <p>Équipe: <span>{selectedCharacter.personal && selectedCharacter.personal.team && selectedCharacter.personal.team[0]}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
