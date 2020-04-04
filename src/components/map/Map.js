import React, {useEffect, useState, useRef} from 'react';
import mapboxgl from 'mapbox-gl';

function Map(){
    // console.log(`${process.env.REACT_APP_ACCESS_TOKEN}`);
    mapboxgl.accessToken = `${process.env.REACT_APP_ACCESS_TOKEN}`;
    let mapContainer = useRef(null);
    const [pos, setPos] = useState({
        lng: 5,
        lat: 34,
        zoom: 2
    });

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [pos.lng, pos.lat],
            zoom: pos.zoom
        });
        map.on('move', () => {
            setPos({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
         });       
    });

    return (
        <>
        <aside className="sidebar">
            <div>Longitude: {pos.lng} | Latitude: {pos.lat} | Zoom: {pos.zoom}</div>
        </aside>
        <div className="mapContainer" ref={el => mapContainer = el } id="map"></div>
        </>
    );
}

export default Map;