import React from 'react';
import AgentKartica from './AgentKartica';
import Pretraga from '../Pretraga/Pretraga';

const Agenti = () => {

    let agent = {
        ime: "Ime",
        prezime: "Prezime",
        zvanje: "agent"
    };

    return (
        <div className="prozor">
            <Pretraga/>
            <div className="zahtjevi-grid">
                <AgentKartica {...agent} />
                <AgentKartica {...agent} />
                <AgentKartica {...agent} />
            </div>
            <button className="lijevi">&lt;&lt;</button>
            <button className="desni">&gt;&gt;</button>
        </div>
    );
}

export default Agenti;
