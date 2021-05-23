import React from 'react';
import {useHistory} from 'react-router';
import './zahtjevi.css';

const ZahtjevKartica = (props) => {

    const history = useHistory();

    return (
        <div className="kartica">
            <p className="datum">{props.datum}</p>
            <h4 className="naziv">{props.naziv}</h4>
            <h4 className="naziv">{props.vrijeme}</h4>
            <p className="opis">{props.opis}</p>
            <div className="klijent">
                <img className="profilna"
                     src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                     alt="profilna"
                />
                <div className="podaci">
                    <h2 className="ime">{props.imeKlijenta}</h2>
                    <h2 className="kontakt">{props.kontaktKlijenta}</h2>
                </div>
            </div>
            <button className="zahtjev-btn"
                    onClick={() => history.push("/prosljedjivanjezahtjeva")}>
                Prosljeđivanje zahtjeva
            </button>
            <button className="zahtjev-btn"
                    onClick={() => history.push("/pregledzahtjeva")}>
                Pregled zahtjeva
            </button>
        </div>
    );
}

export default ZahtjevKartica;
