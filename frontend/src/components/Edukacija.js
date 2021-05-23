import React from 'react';
import '../css/rjesenje.css'

const Edukacija = (props) => {

    return (
        <div className="prozor-cert">
            <div className="sadrzaj">
                <h2>Obrazovna institucija</h2>
                <input type="text" value={props.ustanova} disabled/>
                <br/>
                <h2>Stepen edukacije</h2>
                <input type="text" value={props.stepen} disabled/>
                <br/>
                <h2>Naučna oblast</h2>
                <input type="text" value={props.oblast} disabled/>
                <br/>
                <h2>Datum početka</h2>
                <input type="text" value={props.datumPocetka} disabled/>
                <br/>
                <h2>Datum završetka</h2>
                <input type="text" value={props.datumKraja} disabled/>
                {props.uredjivanje && <button className="spasi">Obriši edukaciju</button>}
            </div>
        </div>
    );
}

export default Edukacija;
