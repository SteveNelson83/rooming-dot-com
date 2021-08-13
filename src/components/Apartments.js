import React, { useState } from 'react';
import Hotel from './Hotel';
import accommodation from '../data/Accommodation';
import '../Hotels.css';

const Apartments = () => {
  const properties = accommodation.filter(property => property.type.id !== 1);
  const [apartments, setHotels] = useState(properties);
  const [resort, setResort] = useState('Mayrhofen');

  function apartmentsByResort(resortName){
    let apartments = properties;
    let filteredApartments = apartments.filter(function(property) {
      if (property.resort.name === resortName) {
        return property;
      }
    });
    setHotels(filteredApartments);
    setResort(resortName);
  };
  
  return (
    <div>
      <div id="sidebar">
        <h2>Filter By Resort</h2>
        <button className="btn-small" onClick={() => apartmentsByResort('Mayrhofen Central')}>Mayrhofen Central</button>
        <br />
        <button className="btn-small" onClick={() => apartmentsByResort('Mayrhofen Non-Central')}>Mayrhofen Non Central</button>
        <br />
        <button className="btn-small" onClick={() => apartmentsByResort('Mayrhofen Districts')}>Mayrhofen Districts</button>
        <br />
      </div>
      <div className="hotels-title">Apartments in {resort}</div>
      <div className="hotels-container">
          {apartments.map((apartment) => {
            return (
              <Hotel {...apartment} key={apartment.id} />
            );
          })}
      </div>
    </div>
  );  
}


export default Apartments;