import React from 'react';
import available from '../data/Available';

const Room = props => {
    const numberAvailable = available.find(room => room.id === props.id).available;
    const total = available.find(room => room.id === props.id).total;
    console.log(numberAvailable);
    return (
        <div className="room-card">
            <h3>Type: {props.type}</h3>
            <h5>-Min. Occupants: {props.min_occupancy}</h5>
            <h5>-Max. Occupants: {props.max_occupancy}</h5>
            <h4>-Price: {props.price.price}</h4>
            <h5>{numberAvailable}/{total} available</h5>
        </div>
    );
}

export default Room;
