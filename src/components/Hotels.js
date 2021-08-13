import React, { useState } from 'react';
import Hotel from './Hotel';
import accommodation from '../data/Accommodation';
import '../Hotels.css';

const Hotels = () => {
  const properties = accommodation.filter(property => property.type.id === 1);
  const [hotels, setHotels] = useState(properties);
  const [resort, setResort] = useState('Mayrhofen');

  function hotelsByResort(resortName){
    let hotels = properties;
    let filteredHotels = hotels.filter(function(property) {
      if (property.resort.name === resortName) {
        return property;
      }
    });
    console.log(filteredHotels);
    setHotels(filteredHotels);
    setResort(resortName);
  };
  
  return (
    <div>
      <div id="sidebar">
        <h2>Filter By Resort</h2>
        <button className="btn-small" onClick={() => hotelsByResort('Mayrhofen Central')}>Mayrhofen Central</button>
        <br />
        <button className="btn-small" onClick={() => hotelsByResort('Mayrhofen Non-Central')}>Mayrhofen Non Central</button>
        <br />
        <button className="btn-small" onClick={() => hotelsByResort('Mayrhofen Districts')}>Mayrhofen Districts</button>
        <br />
      </div>
      <div className="hotels-title">Hotels in {resort}</div>
      <div className="hotels-container">
          {hotels.map((hotel) => {
            return (
              <Hotel {...hotel} key={hotel.id} />
            );
          })}
      </div>
    </div>
  );  
}


export default Hotels;