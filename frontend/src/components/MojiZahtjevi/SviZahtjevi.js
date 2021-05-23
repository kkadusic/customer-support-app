import React from 'react';
import ZahtjevKartica from '../Zahtjevi/ZahtjevKartica';
import Pretraga from '../Pretraga/Pretraga';
import './moji-zahtjevi.css';

const SviZahtjevi = () => {

    let zahtjev = {
        datum: "15. Januar 2021.",
        naziv: "Naziv zahtjeva",
        vrijeme: "9:00", opis: "Opis zahtjeva",
        imeKlijenta: "Neko Nekić",
        kontaktKlijenta: "neko@email.com"
    };

    return (
        <div className="prozor">
            <Pretraga/>
            <div className="zahtjevi-grid">
                <ZahtjevKartica {...zahtjev} />
                <ZahtjevKartica {...zahtjev} />
                <ZahtjevKartica {...zahtjev} />
            </div>
            <button className="lijevi">&lt;&lt;</button>
            <button className="desni">&gt;&gt;</button>
        </div>
    );
}

export default SviZahtjevi;
