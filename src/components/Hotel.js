import React, { useState } from 'react';
import Room from './Room';
import available from '../data/Available';

const Hotel = props => {
  const [showRooms, setshowRooms] = useState(false);
  const hotelRooms = props.rooms;
  const availableIds = available.map(room => {
  return room.id;
  });
  let availableRooms = [];
  hotelRooms.map(i => {
    if (availableIds.includes(i.id))
     availableRooms.push(i);
  });
  
  var elem = document.createElement('textarea');
  elem.innerHTML = props.description;
  var decodedDescription = elem.value.replace(/(<([^>]+)>)/gi, "");

  return (
  <div className="hotel-card">	
      <img className="hotel-image" src={props.images[0].filename} />
      <h2 className="hotel-name">{props.name.split('-')[0]}</h2>
      {props.type.id === 1 ?
      <div>
      {[...Array(props.rating.id)].map((e, i) => <img className="stars" src="images/star.jpeg" key={i}/>)}
      </div> :
      <h3>{props.type.name}</h3>
      }
      <h4>{props.resort.name}</h4>
      <h3>-{props.name.split('-')[1]}-</h3>
      <h6>{decodedDescription}</h6>
      <div className="hotel-facilities">
          {props.facilities.map((facility) => {
            return (
              <h6 className="facility" key={facility.id}>-{facility.label}</h6>
            );
          })}
      </div>
      {availableRooms.length ?
      <button className="btn-small" onClick={() => setshowRooms(true)}>Show Rooms</button> :
      <h2 className="hotel-name">{props.type.id === 1 ? 'FULLY BOOKED' : ''}</h2>
      }
      {showRooms ?
      <div className="hotel-rooms">
        <button className="btn-small" onClick={() => setshowRooms(false)}>Hide Rooms</button>
      {availableRooms.map((availableRoom) => {
        return (
          <Room {...availableRoom} key={availableRoom.id} />
        );
      })}
      </div>
      : ''
      }
  </div>
  );
};

export default Hotel;
