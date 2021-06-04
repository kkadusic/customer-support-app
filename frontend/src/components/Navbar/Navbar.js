import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { removeSession } from '../../utilities/localStorage';
import { message } from "antd";
import './navbar.css';

const Navbar = () => {

    let history = useHistory();

    const odjavi = () => {
        removeSession();
        history.push("/pocetna");
        message.success("Uspjesno ste odjavljeni", 3);
    };

    const linkPocetna = <><Link className="navbar-link" to="/">Početna</Link><span>|</span></>;
    const linkPrijava = <><Link className="navbar-link" to="/login">Prijava</Link><span>|</span></>;
    const linkDashboard = <><Link className="navbar-link" to="/dashboard">Dashboard</Link><span>|</span></>;
    const linkProfil = <><Link className="navbar-link" to="/profil">Profil</Link><span>|</span></>;
    const linkZahtjevi = <><Link className="navbar-link" to="/zahtjevi">Korisnički zahtjevi</Link><span>|</span></>;
    const linkOdjava = <Link className="navbar-link" to="/" onClick={odjavi}>Odjava</Link>;
    const linkAgenti = <><Link className="navbar-link" to="/agenti">Agenti</Link><span>|</span></>;
    const linkRjesenja = <><Link className="navbar-link" to="/rjesenja">Rješenja</Link><span>|</span></>;
    const linkStatistics = <><Link className="navbar-link" to="/statistika">Statistika</Link><span>|</span></>;

    const updateNavbar = (status) => {
        return status ? [linkPocetna, linkPrijava, linkDashboard, linkProfil, linkAgenti, linkZahtjevi, linkRjesenja, linkStatistics, linkOdjava] : [linkPocetna, linkPrijava];
    }

    return (
        <div className="navbar">
            {updateNavbar(true).map((item) => item)}
        </div>

    );
}

export default Navbar;

/*
 {linkPocetna} | {linkDashboard} | {linkProfil} | {linkAgenti} | {linkZahtjevi} | {linkRjesenja} | {linkOdjava}
*/