import React from 'react';
import {DeleteOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router';
import {useLocation} from "react-router-dom";
import './zahtjev-forma.css';

const UredjivanjeZahtjeva = () => {

    const history = useHistory();
    const location = useLocation();
    const incident = location.state.incident;

    return (
        <div className="prozor">
            <DeleteOutlined className="kantica"
                            onClick={() => {
                                history.goBack();
                            }}
            />
            <br/>
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
                    <input type="text" id="naslov" value={incident.title}/>
                    <label htmlFor="naslov">Naslov</label>
                    <select id="kategorija">
                        <option>Hardver</option>
                        <option>Softver</option>
                        <option>Ostalo</option>
                    </select>
                    <label htmlFor="kategorija">Kategorija*</label>
                    <textarea rows="8" id="opis" value={incident.description}/>
                    <label htmlFor="opis">Detaljan opis*</label>
                </div>
                <div>
                    <h2>Status zahtjeva</h2>
                    <input type="radio" id="neobradjen" name="obrada" value="otkazan"/>
                    <label htmlFor="neobradjen" className="radio-label">Otkazan</label><br/>
                    <input type="radio" id="obradjen" name="obrada" value="obradjen"/>
                    <label htmlFor="obradjen" className="radio-label">Neobrađen</label><br/>
                    <input type="radio" id="neobradjen" name="obrada" value="neobradjen"/>
                    <label htmlFor="neobradjen" className="radio-label">Obrađen</label><br/>
                    <select className="agenti">
                        <option>Rjesenje1</option>
                        <option>Rjesenje2</option>
                    </select>
                    <button className="forma-btn"
                            onClick={() => {
                                history.push({
                                    pathname: '/unosrjesenja',
                                    state: {incidentId: incident.id}
                                });
                            }}>
                        Dodaj novo rješenje
                    </button>
                </div>
            </div>
            <button className="spasi-btn">Spasi</button>
        </div>
    );
}

export default UredjivanjeZahtjeva;
