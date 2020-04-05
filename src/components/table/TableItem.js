import React from 'react';


function TableItem(props) {

    return (
        <div className="table-item table-item--container">
            <p className="table-item">Marker ID: {props.id}</p>
            <span className="table-item--delete" onClick={() => props.handleDelete(props.id)}>&#10006;</span>
        </div>
    );
}

export default TableItem;