import React from 'react';
import RjesenjeKartica from './RjesenjeKartica';
import '../css/moji-zahtjevi.css';
import Pretraga from './Pretraga';

const Rjesenja = () => {
    let rjesenje = {
        datum: "15. Januar 2021.", id: "ID rjesenja", opis: "Opis zahtjeva",
        agent: "Neko Nekić", zvanje: "agent"
    }

    return (<div className="prozor">
        <Pretraga />
        <div className="zahtjevi-grid">
            <RjesenjeKartica {...rjesenje} />
            <RjesenjeKartica {...rjesenje} />
            <RjesenjeKartica {...rjesenje} />
        </div>
        <button className="lijevi">&lt;&lt;</button>
        <button className="desni">&gt;&gt;</button>
    </div>);
}

export default Rjesenja;