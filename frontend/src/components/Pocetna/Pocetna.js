import React from 'react'
import './pocetna.css'

const Pocetna = () => {

    return (
        <div id="main-div">
            <p id="pocetna-title">Sistem za korisničku podršku</p>
            <div id="msg-area">
                <p id="slogan">We are here to help!</p>
                <p id="company-description">Odjel za korisničku podršku predstavlja jedan od odjela kompanije čija je
                    osnovna namjena pružanje efikasne i brze tehničke podrške poslovnim korisnicima kroz upravljanje
                    njihovim zahtjevima koji se odnose na usluge i servise kompanije, a što se odražava kroz primanje,
                    obradu, analizu i evidenciju korisničkih zahtjeva.
                    U konačnici, odjel za korisničku podršku nastoji olakšati komunikaciju prema vanjskim korisnicima te
                    komunikaciju između zaposlenika odjela pri rješavanju i evidenciji korisničkih zahtjeva te ubrzati
                    proces donošenja rješenja i odgovora na korisničke zahtjeve.
                    Uposlenici odjela predstavljaju različite agente specijalizirane za različite domene problema i
                    usluga koje kompanija pruža klijentima te koji međusobno komuniciraju kroz prosljeđivanje
                    zaprimljenih zahtjeva i njihovo rješavanje.</p>
                <button id="redir-button"
                        onClick={event => window.location.href = '/login'}
                >
                    Prijavi se
                </button>
            </div>
        </div>
    )
}

export default Pocetna;
