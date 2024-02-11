import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BeerDetailsPage from '../pages/BeerDetailsPage';
import axios from 'axios';


const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeerPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [beerId, setBeerId] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setBeerId(response.data._id);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching random beer:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div>Loading...</div>
      ) : beerId ? (
        <BeerDetailsPage beerId={beerId} />
      ) : (
        <div>No random beer found 🙈</div>
      )}
    </>
  );
}

export default RandomBeerPage;