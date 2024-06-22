import   { useState } from 'react';
import '../../css/Formulaire.css';
function Formulaire() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [numeroTelephone, setNumeroTelephone] = useState('');
    const [abonnement, setAbonnement] = useState(false);
    const [dateAbonnement, setDateAbonnement] = useState('');
    const [isValidated, setIsValidated] = useState(false);
   
   const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
        e.stopPropagation();
    } else {
        const userData = {
            nom,
            prenom,
            adresse,
            numeroTelephone,
            abonnement,
            dateAbonnement
        };
        // Vérification et récupération des données JSON du fichier Users.json
        fetch('./Users.json') // Utilisation du chemin relatif
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération du fichier Users.json : ' + response.status);
                }
                return response.json(); // Convertit la réponse en JSON
            })
            .then(data => {
                const updatedData = [...data, userData];
                // Envoi des données JSON mises à jour au fichier Users.json
                fetch('./Users.json', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedData)
                })
                .then(response => {
                    if (response.ok) {
                        console.log('Données envoyées avec succès !');
                        // Réinitialiser les champs du formulaire après l'envoi réussi
                        setNom('');
                        setPrenom('');
                        setAdresse('');
                        setNumeroTelephone('');
                        setAbonnement(false);
                        setDateAbonnement('');
                    } else {
                        throw new Error('Erreur lors de l\'envoi des données : ' + response.status);
                    }
                })
                .catch(error => {
                    console.error('Erreur lors de l\'envoi des données :', error);
                });
            })
            .catch(error => {
                console.error(error.message); // Affiche le message d'erreur dans la console
            });
    }
    setIsValidated(true);
    };
    const handleReset = () => {
        setNom('');
        setPrenom('');
        setAdresse('');
        setNumeroTelephone('');
        setAbonnement(false);
        setDateAbonnement('');
    };

    return (
        
        <div className="container_formulaire">
            <h2>Formulaire</h2>
            <form onSubmit={handleSubmit} className={isValidated ? 'was-validated' : 'needs-validation'} noValidate>
                <div className="mb-3">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" className="form-control" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" className="form-control" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="adresse">Adresse</label>
                    <input type="text" className="form-control" id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="numeroTelephone">Numéro de téléphone</label>
                    <input type="tel" className="form-control" id="numeroTelephone" value={numeroTelephone} onChange={(e) => setNumeroTelephone(e.target.value)} pattern="[0-9]{10}" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="abonnement" checked={abonnement} onChange={(e) => setAbonnement(e.target.checked)} />
                    <label className="form-check-label" htmlFor="abonnement">Abonnement</label>
                </div>
                {abonnement && (
                    <div className="mb-3">
                        <label htmlFor="dateAbonnement">Date d abonnement</label>
                        <input type="date" className="form-control" id="dateAbonnement" value={dateAbonnement} onChange={(e) => setDateAbonnement(e.target.value)} required />
                    </div>
                )}
                <button type="submit" className="btn btn-primary">S abonner</button>
                <button type="button" className="btn btn-secondary" onClick={handleReset}>Annuler</button>
            </form>
        </div>
    );
}

export default Formulaire;
