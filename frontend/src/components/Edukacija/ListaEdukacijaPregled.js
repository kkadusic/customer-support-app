import React from 'react';
import './certifikati-edukacije.css'
import Edukacija from '../Rjesenje/Edukacija';
import {useLocation} from "react-router-dom";

const ListaEdukacijaPregled = (props) => {

    let edukacija = {
        ustanova: 'UNSA ETF',
        stepen: "Bachelor",
        oblast: "Informatika",
        datumPocetka: "01/01/2018",
        datumKraja: "01/01/2021"
    };

    const location = useLocation();
    const educations = location.state.educations;
    console.log(educations);

    return (
        <div className="grid-certifikata">
            {educations.map(edukacija => (
                <Edukacija ustanova={edukacija.school}
                           stepen={edukacija.degree}
                           oblast={edukacija.fieldOfStudy}
                           datumKraja={edukacija.endDate}
                           datumPocetka={edukacija.startDate}
                />
            ))}
        </div>
    );
};

export default ListaEdukacijaPregled;
