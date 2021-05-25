import React from 'react';
import {useHistory} from 'react-router';
import './rjesenje.css'
import {useLocation} from "react-router-dom";

const PregledRjesenja = () => {

    const history = useHistory();
    const location = useLocation();
    const solutions = location.state.solutions;

    return (
        <div className="prozor">
            <h1 className="top-naslov">Pregled rješenja</h1>
            {solutions.map(solution => (
                <>
                    <h1 className="unos-rjesenja">ID zahtjeva: {solution.id}</h1><br/>
                    <div className="sadrzaj">
                        <h2>Naslov</h2>
                        <input value={solution.title} disabled={true}/>
                        <br/>
                        <h2>Rješenje</h2>
                        <textarea rows="15" value={solution.description}/>
                    </div>
                </>
            ))}
            <button className="spasi"
                    onClick={() => {
                        history.goBack();
                    }}
            >
                Zatvori
            </button>
        </div>

    );
}

export default PregledRjesenja;
