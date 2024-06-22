import { Route, Routes } from 'react-router-dom';
import Acceuil from "./components/Page/Acceuil";
import Film from "./components/Page/Film";
import Serie from "./components/Page/Serie";
import Naruto from "./components/Page/Naruto";
import Navbar from "./components/Navbar/Navbar";
import Apropos from "./components/Page/Apropos";
import Footer from './components/Footer/Footer';
import Personnage from './components/Naruto/Personnage';
import "./css/Navbar.css"


export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
            <Route path="/" element = {<Acceuil/>}></Route>
            <Route path="/Film" element = {<Film/>}></Route>
            <Route path="/Serie" element = {<Serie/>}></Route>
            <Route path="/Naruto" element = {<Naruto/>}></Route>
             <Route path="/Personnage/:characterId" element={<Personnage />} />
            <Route path="/Apropos" element = {<Apropos/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

