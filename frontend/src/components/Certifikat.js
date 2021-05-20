import React from 'react';
import '../css/rjesenje.css'

const Certifikat = (props) => {
    return (<div className="prozor-cert">
        <div className="sadrzaj">
            <h2>Naslov certifikata</h2>
            <input type="text" value={props.naslov} disabled></input>
            <br />
            <h2>Odgovorna organizacija</h2>
            <input type="text" value={props.org} disabled></input>
            <br />
            <h2>Datum izdavanja</h2>
            <input type="text" value={props.datum} disabled></input>
            {props.uredjivanje && <button className="spasi">Obriši certifikat</button>}
        </div>
    </div>);
}

export default Certifikat;