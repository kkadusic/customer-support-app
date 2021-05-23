import React from 'react';
import {useHistory} from 'react-router';
import Certifikat from '../Rjesenje/Certifikat';
import './certifikati-edukacije.css';

const ListaCertifikataUredjivanje = () => {

    const history = useHistory();

    let certifikat = {
        naslov: 'Naslov certifikata',
        organizacija: "Naziv odgovorne organizacije",
        datum: "01/01/2021"
    };

    return (
        <div className="lista">
            <div className="grid-certifikata">
                <Certifikat naslov={certifikat.naslov}
                            org={certifikat.organizacija}
                            datum={certifikat.datum}
                            uredjivanje={true}/>
                <Certifikat naslov={certifikat.naslov}
                            org={certifikat.organizacija}
                            datum={certifikat.datum}
                            uredjivanje={true}/>
                <Certifikat naslov={certifikat.naslov}
                            org={certifikat.organizacija}
                            datum={certifikat.datum}
                            uredjivanje={true}/>
                <Certifikat naslov={certifikat.naslov}
                            org={certifikat.organizacija}
                            datum={certifikat.datum}
                            uredjivanje={true}/>
            </div>
            <button className="dodaj"
                    onClick={() => {
                        history.push("/unoscertifikata")
                    }}
            >
                Dodaj certifikat
            </button>
        </div>
    );
}

export default ListaCertifikataUredjivanje;
