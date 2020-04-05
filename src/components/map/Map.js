import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

function Map(props) {
    mapboxgl.accessToken = `${process.env.REACT_APP_ACCESS_TOKEN}`;
    let mapContainer = useRef(null);
    const [pos, setPos] = useState({
        lng: 5,
        lat: 34,
        zoom: 2,
        markers: {},
        savedMarkers: JSON.parse(localStorage.getItem('markers'))
    });

    useEffect(() => {
        if (typeof map === 'object') {
            const map = new mapboxgl.Map({
                container: mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [pos.lng, pos.lat],
                zoom: pos.zoom
            });
            map.on('move', () => {
                setPos(prevState => ({
                    ...prevState,
                    lng: map.getCenter().lng.toFixed(4),
                    lat: map.getCenter().lat.toFixed(4),
                    zoom: map.getZoom().toFixed(2),
                }));
            });

            if (pos.savedMarkers !== null) {
                Object.entries(pos.savedMarkers).forEach(([id, mark]) => {
                    const newMarker = new mapboxgl.Marker({
                        draggable: true
                    })
                        .setLngLat([mark.lng, mark.lat])
                        .addTo(map);
                    newMarker['id'] = id;
                    newMarker.on('dragend', (e) => modifyMarker(e));
                    setPos(prevState => ({
                        ...prevState,
                        markers: {
                            ...prevState.markers,
                            [id]: { lng: mark.lng, lat: mark.lat }
                        }
                    }
                    ));
                });
                setPos(prevState => ({ ...prevState, savedMarkers: null }));
                localStorage.removeItem('markers');
            }
            localStorage.setItem('markers', JSON.stringify(pos.markers));
            map.on('click', (e) => addMarker(e, map));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pos.markers]);

    function modifyMarker(e) {
        const { _lngLat, id } = e.target;
        setPos(prevState => ({
            ...prevState,
            markers: {
                ...prevState.markers,
                [id]: { lng: _lngLat.lng, lat: _lngLat.lat }
            }
        }))
    }

    function addMarker(e, map) {
        const id = props.genRandId();
        const { lng, lat } = e.lngLat;

        const marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([lng, lat])
            .addTo(map);
        marker['id'] = id;
        marker.on('dragend', (e) => modifyMarker(e));
        setPos(prevState => ({
            ...prevState,
            markers: { ...prevState.markers, [id]: { lng, lat } }
        }));
    }

    return (
        <>
            <aside className="sidebar">
                <div>Longitude: {pos.lng} | Latitude: {pos.lat} | Zoom: {pos.zoom}</div>
            </aside>
            <div className="mapContainer" ref={el => mapContainer = el} id="map"></div>
        </>
    );
}

export default Map;