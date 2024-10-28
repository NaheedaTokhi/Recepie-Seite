import React, { useState, useEffect } from 'react';
import {Footer} from "../components/Footer"
import '../styles/Carousel.css'; // Für Styling

export const Carousel = () => {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // API-Schlüssel und App-ID
  const APP_ID = '712a3480'; 
  const APP_KEY = '05bed75edd068724d2a9de3432c14e8b';

  
  const searchTerms = ["chicken", "beef", "salad", "dessert", "soup", "fish", "vegetarian", "breakfast", "pasta", "rice"];

  
  const getRandomSearchTerm = () => {
    const randomIndex = Math.floor(Math.random() * searchTerms.length);
    return searchTerms[randomIndex];
  };


  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${getRandomSearchTerm()}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const recipeImages = data.hits.map(hit => hit.recipe.image);
        setPhotos(recipeImages);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
    };

    fetchRecipes();

    const interval = setInterval(() => {
     
      setCurrentIndex((prevIndex) => {
       
        return (prevIndex + 3) % photos.length;
      });
    }, 10000); 

    return () => clearInterval(interval); 
  }, [photos.length]);


  const currentPhotos = photos.slice(currentIndex, currentIndex + 3);

  return (
    <>
    <div className="carousel">
      <div className="carousel-container">
        {currentPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Recipe ${index}`} className="carousel-photo" />
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
};
