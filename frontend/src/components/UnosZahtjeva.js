import React from 'react';
import '../css/zahtjev-forma.css';
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';


const UnosZahtjeva = () => {
    const history = useHistory();

    return (<div className="prozor">
        <DeleteOutlined className="kantica" onClick={() => { history.goBack(); }} />
        <br />
        <div className="forma-grid">
            <div>
                <h2>Podaci o klijentu</h2>
                <input type="text" id="ime"></input>
                <label for="ime">Ime*</label>
                <input type="text" id="prezime"></input>
                <label for="prezime">Prezime*</label>
                <input type="email" id="email"></input>
                <label for="email">E-mail*</label>
                <input type="text" id="telefon"></input>
                <label for="telefon">Telefon*</label>
                <input type="text" id="drzava"></input>
                <label for="drzava">Drzava*</label>
                <input type="text" id="grad"></input>
                <label for="grad">Grad*</label>
            </div>
            <div>
                <h2>Opis problema</h2>
                <input type="text" id="naslov"></input>
                <label for="naslov">Naslov*</label>
                <select id="kategorija">
                    <option>Hardver</option>
                    <option>Softver</option>
                    <option>Ostalo</option>
                </select>
                <label for="kategorija">Kategorija*</label>
                <textarea rows="6" id="opis"></textarea>
                <label for="opis">Detaljan opis*</label>
            </div>
        </div>
        <button className="spasi-btn">Spasi</button>
    </div>);
}

export default UnosZahtjeva;