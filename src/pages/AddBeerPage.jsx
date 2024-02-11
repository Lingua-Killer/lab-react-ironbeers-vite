import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function AddBeerPage() {
    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setBeerData({
            ...beerData,
            [name]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerData);
            console.log(response.data);
            // Manejar la respuesta exitosa aquí
        } catch (error) {
            console.error('Error adding beer:', error);
            // Manejar cualquier error aquí
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Agregar Nueva Cerveza</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" value={beerData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="tagline">Lema</label>
                    <input type="text" id="tagline" name="tagline" value={beerData.tagline} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Descripción</label>
                    <textarea id="description" name="description" value={beerData.description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="first_brewed">Primera Elaboración</label>
                    <input type="text" id="first_brewed" name="first_brewed" value={beerData.first_brewed} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="brewers_tips">Consejos del Cervecero</label>
                    <input type="text" id="brewers_tips" name="brewers_tips" value={beerData.brewers_tips} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="attenuation_level">Nivel de Atenuación</label>
                    <input type="number" id="attenuation_level" name="attenuation_level" value={beerData.attenuation_level} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="contributed_by">Contribuido por</label>
                    <input type="text" id="contributed_by" name="contributed_by" value={beerData.contributed_by} onChange={handleChange} />
                </div>
                <button type="submit">Agregar Cerveza</button>
            </form>
        </div>
    );
}

export default AddBeerPage;
