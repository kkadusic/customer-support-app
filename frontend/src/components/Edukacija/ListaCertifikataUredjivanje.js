import React from 'react';
import {useHistory} from 'react-router';
import Certifikat from '../Rjesenje/Certifikat';
import './certifikati-edukacije.css';
import {useLocation} from "react-router-dom";

const ListaCertifikataUredjivanje = () => {

    const history = useHistory();
    const location = useLocation();
    const certificates = location.state.agent.certificates;

    return (
        <div className="lista">
            <div className="grid-certifikata">
                {!certificates.length ?
                    (<>
                        Agent nema certifikata
                    </>) :
                    (<>
                        {certificates.map(certifikat => (
                            <Certifikat naslov={certifikat.name}
                                        org={certifikat.issuingOrganization}
                                        datum={certifikat.issueDate}
                                        uredjivanje={true}
                            />
                        ))}
                    </>)
                }
            </div>
            <button className="dodaj"
                    onClick={() => {
                        history.push({
                            pathname: '/unoscertifikata',
                            state: {agent: location.state.agent}
                        });
                    }}
            >
                Dodaj certifikat
            </button>
        </div>
    );
}

export default ListaCertifikataUredjivanje;
