import React from 'react';
import {useHistory} from 'react-router';
import '../css/dashboard.css'
import DashboardKartica from './DashboardKartica';

const DashboardZahtjevi = () => {

    const history = useHistory();

    return (
        <div className="dashboard-grid">
            <DashboardKartica naslov="Svi zahtjevi"
                              opis="Pregled svih pristiglih zahtjeva"
                              dugme="Pregled"
                              handleClick={() => {
                                  history.push("/svizahtjevi")
                              }}
            />
            <DashboardKartica naslov="Moji zahtjevi"
                              opis="Pregled zahtjeva u mojoj nadležnosti"
                              dugme="Pregled"
                              handleClick={() => {
                                  history.push("/mojizahtjevi")
                              }}
            />
            <DashboardKartica naslov="Unos novog zahtjeva"
                              opis="Kreiranje novog zahtjeva"
                              dugme="Unos"
                              handleClick={() => {
                                  history.push("/unoszahtjeva")
                              }}
            />
        </div>
    );
}

export default DashboardZahtjevi;
