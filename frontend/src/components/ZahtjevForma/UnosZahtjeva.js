import React from 'react';
import './zahtjev-forma.css';
import {DeleteOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router';


const UnosZahtjeva = () => {

    const history = useHistory();

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
                    <input type="text" id="ime"/>
                    <label for="ime">Ime*</label>
                    <input type="text" id="prezime"/>
                    <label for="prezime">Prezime*</label>
                    <input type="email" id="email"/>
                    <label for="email">E-mail*</label>
                    <input type="text" id="telefon"/>
                    <label for="telefon">Telefon*</label>
                    <input type="text" id="drzava"/>
                    <label for="drzava">Drzava*</label>
                    <input type="text" id="grad"/>
                    <label for="grad">Grad*</label>
                </div>
                <div>
                    <h2>Opis problema</h2>
                    <input type="text" id="naslov"/>
                    <label for="naslov">Naslov*</label>
                    <select id="kategorija">
                        <option>Hardver</option>
                        <option>Softver</option>
                        <option>Ostalo</option>
                    </select>
                    <label for="kategorija">Kategorija*</label>
                    <textarea rows="6" id="opis"/>
                    <label for="opis">Detaljan opis*</label>
                </div>
            </div>
            <button className="spasi-btn">Spasi</button>
        </div>
    );
}

export default UnosZahtjeva;
