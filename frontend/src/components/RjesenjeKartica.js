import React from 'react';
import { useHistory } from 'react-router';
import '../css/zahtjevi.css';

const RjesenjeKartica = (props) => {
    const history = useHistory();
    return(
        <div className="kartica">
            <p className="datum">{props.datum}</p>
            <h4 className="naziv">{props.id}</h4>
            <p className="opis">{props.opis}</p>
            <div className="klijent">
                <img className="profilna" src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="profilna" />
                <div className="podaci">
                    <h2 className="ime">{props.agent}</h2>
                    <h2 className="kontakt">{props.zvanje}</h2>
                </div>
            </div>
            <div className="linija-btm"></div>
            <button className="pregled-btn" onClick={()=>history.push("/pregledrjesenja")}>Pregled</button>
            <button className="zahtjev-btn" >Brisanje</button>
        </div>
    );
}

export default RjesenjeKartica;