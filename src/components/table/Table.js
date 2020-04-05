import React, { useState } from 'react';
import TableItem from './TableItem';
import './Table.css';

function Table() {
    const markers = JSON.parse(localStorage.getItem('markers'));
    const arrayMarkers = Object.entries(markers).map(([key, value]) => {
        return { id: key, value: value };
    });
    const [displayedMarkers, setMarkers] = useState(arrayMarkers);

    function deleteMarker(id) {
        const filteredArr = displayedMarkers.filter(el => el.id !== id);
        const storageContent = Object.entries(markers).filter(([key, value]) => {
            if (key !== id) return [key, value];
            return false;
        });
        localStorage.setItem('markers', JSON.stringify(Object.fromEntries(storageContent)));
        setMarkers(filteredArr);
    }

    return (
        <div className="table">
            {displayedMarkers.map(el => <TableItem key={el.id} id={el.id} values={el.value} handleDelete={deleteMarker} />)}
        </div>
    );
}

export default Table;