import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios'

export const Tours = () => {

  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/customer/gettour')
      .then((response) => setTours(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
    <div className="container">
      <h2>Tours</h2>
      {tours.map((tour) => (
        <div className="tours" key={tour.id}>
          <h3 className='tourHead'> {tour.tour_name}</h3>
          <p><span>description:</span> {tour.description}</p>
          <p><span>destination:</span> {tour.destination}</p>
          <p><span>departureDate:</span>{tour.departure_date}</p>
          <p><span>Duration:</span>{tour.duration_days}</p>
          <p><span>Price:</span>{tour.price}</p>
          <button className="cart">Add to Cart</button>
          <button className="wish">Add to Wishlist</button>
        </div>
      ))}
    </div>
    </div>
  );
};
