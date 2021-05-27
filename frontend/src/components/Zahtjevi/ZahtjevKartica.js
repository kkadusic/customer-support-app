import React, { useEffect } from 'react';
import {useHistory} from 'react-router';
import './zahtjevi.css';

const ZahtjevKartica = ({incident}) => {

    const history = useHistory();
   
    useEffect(() => {

    }, []) 
    return (
        <div className="kartica">
            <p className="datum">{incident.dateCreated}</p>
            {/*TODO separate date and time*/}
            <h4 className="naziv">{incident.title}</h4>
            <p className="opis">{incident.description}</p>
            <div className="klijent">
                <img className="profilna"
                     src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                     alt="profilna"
                />
                <div className="podaci">
                    <h2 className="ime">{incident.client.firstName} {incident.client.lastName}</h2>
                    <h2 className="kontakt">{incident.client.email}</h2>
                    <h2 className="kontakt">{incident.client.phoneNumber}</h2>
                </div>
            </div>
            <button className="zahtjev-btn"
                    onClick={() => history.push({pathname:"/prosljedjivanjezahtjeva", state: {id : incident.id}})}>
                Prosljeđivanje zahtjeva
            </button>
            <button className="zahtjev-btn"
                    onClick={() => {
                        history.push({
                            pathname: '/pregledzahtjeva',
                            state: {incident: incident}
                        });
                    }}>
                Pregled zahtjeva
            </button>
        </div>
    );
}

export default ZahtjevKartica;
