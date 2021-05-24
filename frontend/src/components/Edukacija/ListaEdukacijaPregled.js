import React from 'react';
import './certifikati-edukacije.css'
import Edukacija from '../Rjesenje/Edukacija';
import {useLocation} from "react-router-dom";

const ListaEdukacijaPregled = (props) => {
    const location = useLocation();
    const educations = location.state.educations;

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
