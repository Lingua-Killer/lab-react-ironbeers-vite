// BeerDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function BeerDetailsPage({ beerId }) {
  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        setBeerDetails(response.data);
      } catch (error) {
        console.error('Error fetching beer details:', error);
      }
    };

    fetchData();
  }, [beerId]);

  if (!beerDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h2>Beer Details</h2>
      <div>
        <img src={beerDetails.image_url} alt={beerDetails.name} />
        <h3>{beerDetails.name}</h3>
        <p>{beerDetails.tagline}</p>
        <p>Contributed by: {beerDetails.contributed_by}</p>
        <p>First brewed: {beerDetails.first_brewed}</p>
        <p>Attenuation level: {beerDetails.attenuation_level}</p>
        <p>Description: {beerDetails.description}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
