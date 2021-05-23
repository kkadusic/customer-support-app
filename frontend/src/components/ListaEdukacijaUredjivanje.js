import React from 'react';
import {useHistory} from 'react-router';
import '../css/certifikati-edukacije.css'
import Edukacija from './Edukacija';

const ListaEdukacijaUredjivanje = () => {

    const history = useHistory();

    let edukacija = {
        ustanova: 'UNSA ETF',
        stepen: "Bachelor",
        oblast: "Informatika",
        datumPocetka: "01/01/2018",
        datumKraja: "01/01/2021"
    };

    return (
        <div className="lista">
            <div className="grid-certifikata">
                <Edukacija ustanova={edukacija.ustanova}
                           stepen={edukacija.stepen}
                           oblast={edukacija.oblast}
                           datumKraja={edukacija.datumKraja}
                           datumPocetka={edukacija.datumPocetka}
                           uredjivanje={true}
                />
                <Edukacija ustanova={edukacija.ustanova}
                           stepen={edukacija.stepen}
                           oblast={edukacija.oblast}
                           datumKraja={edukacija.datumKraja}
                           datumPocetka={edukacija.datumPocetka}
                           uredjivanje={true}
                />
                <Edukacija ustanova={edukacija.ustanova}
                           stepen={edukacija.stepen}
                           oblast={edukacija.oblast}
                           datumKraja={edukacija.datumKraja}
                           datumPocetka={edukacija.datumPocetka}
                           uredjivanje={true}
                />
            </div>
            <button className="dodaj"
                    onClick={() => {
                        history.push("/unosedukacije")
                    }}
            >
                Dodaj edukaciju
            </button>
            <p>Nemate račun? <a href="/register">Registrirajte se</a></p>
        </div>
    );
}

export default ListaEdukacijaUredjivanje;
