import React from 'react';
import '../css/certifikati-edukacije.css'
import Edukacija from './Edukacija';

const ListaEdukacijaPregled = (props) => {

    let edukacija = {
        ustanova: 'UNSA ETF',
        stepen: "Bachelor",
        oblast: "Informatika",
        datumPocetka: "01/01/2018",
        datumKraja: "01/01/2021"
    };

    return (
        <div className="grid-certifikata">
            <Edukacija ustanova={edukacija.ustanova}
                       stepen={edukacija.stepen}
                       oblast={edukacija.oblast}
                       datumKraja={edukacija.datumKraja}
                       datumPocetka={edukacija.datumPocetka}
            />
            <Edukacija ustanova={edukacija.ustanova}
                       stepen={edukacija.stepen}
                       oblast={edukacija.oblast}
                       datumKraja={edukacija.datumKraja}
                       datumPocetka={edukacija.datumPocetka}
            />
            <Edukacija ustanova={edukacija.ustanova}
                       stepen={edukacija.stepen}
                       oblast={edukacija.oblast}
                       datumKraja={edukacija.datumKraja}
                       datumPocetka={edukacija.datumPocetka}
            />
        </div>
    );
};

export default ListaEdukacijaPregled;
