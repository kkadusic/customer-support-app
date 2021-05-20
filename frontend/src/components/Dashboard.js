import React from 'react';
import { useHistory } from 'react-router';
import '../css/dashboard.css'
import DashboardKartica from './DashboardKartica';

const Dashboard = () => {
    const history = useHistory();

    return (
        <div className="dashboard-grid">
            <DashboardKartica naslov="Moj profil" opis="Pregled korisničkog računa" dugme="Pregled" />
            <DashboardKartica naslov="Agenti" opis="Pregled informacija o uposlenima odjela" dugme="Pregled" />
            <DashboardKartica naslov="Korisnički zahtjevi" opis="Upravljanje korisničkim zahtjevima"
                dugme="Pregled" handleClick={() => { history.push("/zahtjevi") }} />
        </div>
    );
}

export default Dashboard;