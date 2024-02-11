import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import beersImage from '../assets/beers.png'; 
import randomBeerImage from '../assets/random-beer.png'; 
import newBeerImage from '../assets/new-beer.png'; 

function HomePage() {
  return (
    <div className="homePage">
      <Navbar /> 
      <h2>Bienvenido a IronBeers</h2>
      <ul>
        <li>
          <img src={beersImage} alt="Todas las cervezas" />
          <Link to="/beers">Todas las cervezas</Link>
        </li>
        <li>
          <img src={randomBeerImage} alt="Cerveza aleatoria" />
          <Link to="/random-beer">Cerveza aleatoria</Link>
        </li>
        <li>
          <img src={newBeerImage} alt="Nueva Cerveza" />
          <Link to="/new-beer">Nueva Cerveza</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
