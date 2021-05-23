import React from 'react';
import '../css/dashboard.css';

const DashboardKartica = (props) => {

    return (
        <div className="dashboard-card">
            <h1> {props.naslov} </h1>
            <p> {props.opis} </p>
            <button className="dashboard-card-btn"
                    onClick={props.handleClick}>
                {props.dugme}
            </button>
        </div>
    );
}

export default DashboardKartica;
