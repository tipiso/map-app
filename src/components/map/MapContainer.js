import React, { useRef } from 'react';
import Map from '../map/Map';
import Navigation from '../menu/Navbar';
import './App.css';


function MapContainer(props) {
    const container = useRef(null);
    return (
        <>
            <div ref={(el) => container = el}></div>
        </>
    );
}

export default MapContainer;
