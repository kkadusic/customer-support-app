import React from 'react';
import '../css/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const linkPocetna = <Link className="navbar-link" to="/">Početna</Link>;
    const linkDashboard = <Link className="navbar-link" to="/dashboard">Dashboard</Link>;
    const linkProfil = <Link className="navbar-link" to="/profil">Profil</Link>;
    const linkZahtjevi = <Link className="navbar-link" to="/zahtjevi">Korisnički zahtjevi</Link>;
    const linkOdjava = <Link className="navbar-link" to="/odjava">Odjava</Link>;
    const linkAgenti = <Link className="navbar-link" to="/agenti">Agenti</Link>;
    const linkRjesenja = <Link className="navbar-link" to="/rjesenja">Rješenja</Link>;

    return (
        <div className="navbar">
            {linkPocetna} | {linkDashboard} | {linkProfil} | {linkAgenti} | {linkZahtjevi} | {linkRjesenja} | {linkOdjava}
        </div>
    );
}

export default Navbar;
