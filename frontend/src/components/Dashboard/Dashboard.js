import React from 'react';
import {useHistory} from 'react-router';
import DashboardKartica from './DashboardKartica';
import './dashboard.css';

const Dashboard = () => {

    const history = useHistory();

    return (
        <div className="dashboard-grid">
            <DashboardKartica naslov="Moj profil"
                              opis="Pregled korisničkog računa"
                              dugme="Pregled"
                              handleClick={() => {
                                history.push("/profil")
                            }}
            />
            <DashboardKartica naslov="Agenti"
                              opis="Pregled informacija o uposlenima odjela"
                              dugme="Pregled"
                              handleClick={() => {
                                  history.push("/agenti")
                              }}
            />
            <DashboardKartica naslov="Korisnički zahtjevi"
                              opis="Upravljanje korisničkim zahtjevima"
                              dugme="Pregled"
                              handleClick={() => {
                                  history.push("/zahtjevi")
                              }}
            />
        </div>
    );
}

export default Dashboard;
