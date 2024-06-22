import Formulaire from '../Formulaire/Formulaire';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/acceuil.css';
import { Link } from 'react-router-dom';

function Acceuil() {
  return (
    <div className="acceuil">
     <h1>Bienvenue sur React Project!</h1>
     <video autoPlay loop muted>
      <source src="../../../images/cinema.mp4" />
      </video>
     <div className="full_card">
        
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="../../../images/milesmorale.jpg" className="card-img-top" alt="Film" />
              <div className="card-body">
                <h5 className="card-title">Films</h5>
                <p className="card-text">Découvrez notre sélection de films à ne pas manquer.</p>
                <Link to="/Film" className="btn btn-primary">Voir Liste</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="../../../images/Peaky.jpg" className="card-img-top" alt="Serie" />
              <div className="card-body">
                <h5 className="card-title">Series</h5>
                <p className="card-text">Découvrez notre sélection de Series à ne pas manquer.</p>
                <Link to="/Serie" className="btn btn-primary">Voir Liste</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="../../../images/naruto-characters.jpg" className="card-img-top" alt="Séries" />
              <div className="card-body">
                <h5 className="card-title">Naruto</h5>
                <p className="card-text">Plongez dans univers du manga Naruto.</p>
                <Link to="/Naruto" className="btn btn-primary">Voir Liste</Link>
              </div>
            </div>
          </div>
        </div>
        <Formulaire />
      </div>
      
    </div>
  );
}

export default Acceuil;