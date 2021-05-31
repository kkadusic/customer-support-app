import React from 'react';
import {useHistory} from 'react-router';
import {useLocation} from "react-router-dom";
import './zahtjev-forma.css';

const PregledZahtjeva = () => {

    const history = useHistory();
    const location = useLocation();
    const incident = location.state.incident;

    return (
        <div className="prozor">
            <br/>
            <h2 className="top-naslov">Pregled zahtjeva</h2>
            <div className="forma-grid">
                <div>
                    <h2>Podaci o klijentu</h2>
                    <input type="text" id="ime" disabled={true} value={incident.client.firstName}/>
                    <label htmlFor="ime">Ime</label>
                    <input type="text" id="prezime" disabled={true} value={incident.client.lastName}/>
                    <label htmlFor="prezime">Prezime</label>
                    <input type="email" id="email" disabled={true} value={incident.client.email}/>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="telefon" disabled={true} value={incident.client.phoneNumber}/>
                    <label htmlFor="telefon">Telefon</label>
                    <input type="text" id="drzava" disabled={true} value={incident.client.country}/>
                    <label htmlFor="drzava">Drzava</label>
                    <input type="text" id="grad" disabled={true} value={incident.client.city}/>
                    <label htmlFor="telefon">Grad</label>
                </div>
                <div>
                    <h2>Opis problema</h2>
                    <input type="text" id="naslov" disabled={true} value={incident.title}/>
                    <label htmlFor="naslov">Naslov</label>
                    <select id="kategorija" disabled={true}>
                        <option selected={true}>{incident.category.name}</option>
                    </select>
                    <label htmlFor="kategorija">Kategorija</label>
                    <textarea rows="8" id="opis" disabled={true} value={incident.description}/>
                    <label htmlFor="opis">Detaljan opis</label>
                </div>
                <div>
                    <h2>Status zahtjeva</h2>
                    {/*<input type="radio" id="neobradjen" name="obrada" value="otkazan" disabled={true}/>*/}
                    {/*<label htmlFor="neobradjen" className="radio-label">Otkazan</label><br/>*/}
                    <input type="radio" id="obradjen" name="obrada" value="obradjen" disabled={true}
                           defaultChecked={true}/>
                    <label htmlFor="obradjen" className="radio-label">{incident.status}</label><br/>
                    {/*<input type="radio" id="neobradjen" name="obrada" value="neobradjen" disabled={true}/>*/}
                    {/*<label htmlFor="neobradjen" className="radio-label">Obrađen</label><br/>*/}
                    <button className="forma-btn"
                            onClick={() => {
                                history.push({
                                    pathname: '/pregledrjesenja',
                                    state: {solutions: incident.solutions}
                                });
                            }}>
                        Pregled rješenja
                    </button>
                </div>
            </div>
            <button className="uredi-btn"
                    onClick={() => {
                        history.push({
                            pathname: '/uredjivanjezahtjeva',
                            state: {incident: incident}
                        });
                    }}
            >
                Uredi zahtjev
            </button>
            <button className="spasi-btn"
                    onClick={() => {
                        history.goBack()
                    }}
            >
                Zatvori
            </button>
        </div>
    );
}

export default PregledZahtjeva;
