import React from 'react';
import './certifikati-edukacije.css'
import Certifikat from '../Rjesenje/Certifikat';
import {useLocation} from "react-router-dom";

const ListaCertifikataPregled = (props) => {
    const location = useLocation();
    const certificates = location.state.certificates;

    return (
        <div className="grid-certifikata">
            {!certificates.length ?
                (<div>
                    Agent nema certifikata
                </div>) :
                (<>
                    {certificates.map(certifikat => (
                        <Certifikat naslov={certifikat.name}
                                    org={certifikat.issuingOrganization}
                                    datum={certifikat.issueDate}
                        />
                    ))}
                </>)
            }
            {props.uredjivanje && <button className="dodaj">Dodaj certifikat</button>}
        </div>
    );
}

export default ListaCertifikataPregled;
