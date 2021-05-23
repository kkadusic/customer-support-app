import React from 'react';
import '../css/rjesenje.css'

const Certifikat = (props) => {

    return (
        <div className="prozor-cert">
            <div className="sadrzaj">
                <h2>Naslov certifikata</h2>
                <input type="text" value={props.naslov} disabled/>
                <br/>
                <h2>Odgovorna organizacija</h2>
                <input type="text" value={props.org} disabled/>
                <br/>
                <h2>Datum izdavanja</h2>
                <input type="text" value={props.datum} disabled/>
                {props.uredjivanje && <button className="spasi">Obriši certifikat</button>}
            </div>
        </div>
    );
}

export default Certifikat;
