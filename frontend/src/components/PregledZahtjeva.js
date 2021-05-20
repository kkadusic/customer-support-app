import React from 'react';
import '../css/zahtjev-forma.css';
import { useHistory } from 'react-router';


const PregledZahtjeva = () => {
    const history = useHistory();

    return (<div className="prozor">
        <br/>
        <h2 className="top-naslov">Pregled zahtjeva</h2>
        <div className="forma-grid">
            <div>
            <h2>Podaci o klijentu</h2>
                <input type="text" id="ime" disabled={true} value="ime"></input>
                <label for="ime">Ime</label>
                <input type="text" id="prezime" disabled={true} value="prezime"></input>
                <label for="prezime">Prezime</label>
                <input type="email" id="email" disabled={true} value="email@mail.com"></input>
                <label for="email">E-mail</label>
                <input type="text" id="telefon" disabled={true} value="000111222"></input>
                <label for="telefon" >Telefon</label>
                <input type="text" id="drzava" disabled={true} value="BiH"></input>
                <label for="drzava" >Drzava</label>
                <input type="text" id="grad" disabled={true} value="Sarajevo"></input>
                <label for="telefon" >Grad</label>
            </div>
            <div>
                <h2>Opis problema</h2>
                <input type="text" id="naslov" disabled={true} value="Naslov problema"></input>
                <label for="naslov">Naslov</label>
                <select id="kategorija" disabled={true}>
                    <option>Hardver</option>
                    <option selected={true}>Softver</option>
                    <option>Ostalo</option>
                </select>
                <label for="kategorija">Kategorija</label>
                
                <textarea rows="8" id="opis" disabled={true}> Cillum esse aliqua nostrud fugiat quis dolor eu minim dolore proident Lorem excepteur sint. Est excepteur eu do tempor aliqua est. Laborum enim est Lorem ut laborum. Eu eiusmod minim commodo dolor sint occaecat fugiat irure aliquip Lorem eu.</textarea>
                <label for="opis">Detaljan opis</label>
            </div>
            <div>
                <h2>Status zahtjeva</h2>
                <input type="radio" id="neobradjen" name="obrada" value="otkazan" disabled={true}></input>
                <label for="neobradjen" className="radio-label">Otkazan</label><br />
                <input type="radio" id="obradjen" name="obrada" value="obradjen" disabled={true}  defaultChecked={true}></input>
                <label for="obradjen" className="radio-label">Neobrađen</label><br />
                <input type="radio" id="neobradjen" name="obrada" value="neobradjen" disabled={true}></input>
                <label for="neobradjen" className="radio-label" >Obrađen</label><br />
                <button className="forma-btn"
                    onClick={() => { history.push("/pregledrjesenja") }}>
                    Pregled rješenja</button>
            </div>
        </div>
        <button className="uredi-btn" onClick={()=>{history.push("/uredjivanjezahtjeva")}}>Uredi zahtjev</button>
        <button className="spasi-btn" onClick={()=>{history.goBack()}}>Zatvori</button>
    </div>);
}

export default PregledZahtjeva;