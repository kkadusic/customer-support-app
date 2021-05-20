import React from 'react';
import { useHistory } from 'react-router';

import '../css/zahtjev-forma.css';

const ProsljedjivanjeZahtjeva = () => {
    const history = useHistory();
    return (<div className="prozor">
        <div className="podprozor">
        <h2>Prosljeđivanje zahtjeva</h2>
        <select className="agenti">
            <option>Ime i prezime</option>
            <option>Ime i prezime2</option>
        </select>
        <button className="forma-btn" >Proslijedi</button>
        <button className="spasi-btn" onClick={() => { history.goBack(); }}>Odustani</button>
        </div>
    </div>);
}

export default ProsljedjivanjeZahtjeva;