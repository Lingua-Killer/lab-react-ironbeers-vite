import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [filteredBeers, setFilteredBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Realizar la solicitud GET al punto final de la API para obtener todas las cervezas
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                // Actualizar el estado con los datos de las cervezas obtenidas
                setBeers(response.data);
                setFilteredBeers(response.data);
            })
            .catch(error => {
                console.error('Error fetching beers:', error);
            });
    }, []); // La dependencia vacía asegura que esta solicitud se realice solo una vez al cargar el componente

    // Función para manejar cambios en el campo de búsqueda
    const handleSearchChange = event => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const filtered = beers.filter(beer => {
            return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredBeers(filtered);
    };

    return (
        <div>
            <Navbar />
            <h2>All Beers</h2>
            {/* Agregar un campo de entrada para la búsqueda */}
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for a beer..."
            />
            {/* Mostrar la lista de cervezas filtradas */}
            <ul>
                {filteredBeers.map(beer => (
                    <li key={beer._id}>
                        <img src={beer.image_url} alt={beer.name} />
                        <div>
                            <h3>{beer.name}</h3>
                            <p>{beer.tagline}</p>
                            <p>Contributed by: {beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}>View details</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllBeersPage;
