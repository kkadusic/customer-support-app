import React from 'react';
import { useHistory } from 'react-router';
import '../css/certifikati-edukacije.css'

const AgentPregled = () => {
    const history = useHistory();
    return (<div className="prozor">
        <br />
        <h2 className="top-naslov">Profil agenta</h2>
        <div className="forma-grid">
            <div>
                <h2>Podaci o agentu</h2>
                <input type="text" id="ime" disabled={true} value="ime"></input>
                <label for="ime">Ime</label>
                <input type="text" id="prezime" disabled={true} value="prezime"></input>
                <label for="prezime">Prezime</label>
                <input type="text" id="zanimanje" disabled={true} value="Agent"></input>
                <label for="telefon" >Zanimanje</label>
                <input type="email" id="email" disabled={true} value="email@mail.com"></input>
                <label for="email">E-mail</label>
            </div>
            <div className="dugmad">
                <button className="dodaj"
                    onClick={() => { history.push("/preglededukacija") }}>
                    Pregled edukacija</button> <br/>
                <button className="dodaj"
                    onClick={() => { history.push("/pregledcertifikata") }}>
                    Pregled certifikata</button>
            </div>
        </div>
    </div>);
}

export default AgentPregled;