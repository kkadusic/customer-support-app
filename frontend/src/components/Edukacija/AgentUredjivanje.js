import React from 'react';
import {useHistory} from 'react-router';
import './certifikati-edukacije.css'
import {useLocation} from "react-router-dom";

const AgentUredjivanje = () => {

    const history = useHistory();
    const location = useLocation();
    const agent = location.state.agent;

    return (
        <div className="prozor">
            <br/>
            <h2 className="top-naslov">Profil agenta</h2>
            <div className="forma-grid">
                <div>
                    <h2>Podaci o agentu</h2>
                    <input type="text" id="ime" value={agent.firstName}/>
                    <label for="ime">Ime</label>
                    <input type="text" id="prezime" value={agent.lastName}/>
                    <label for="prezime">Prezime</label>
                    <input type="text" id="zanimanje" value="Agent"/>
                    <label for="telefon">Zanimanje</label>
                    <input type="email" id="email" value={agent.email}/>
                    <label for="email">E-mail</label>
                </div>
                <div className="dugmad">
                    <button className="dodaj"
                            onClick={() => {
                                history.push("/urediedukacije")
                            }}>
                        Ažuriranje edukacija
                    </button>
                    <br/>
                    <button className="dodaj"
                            onClick={() => {
                                history.push("/uredicertifikate")
                            }}>
                        Ažuriranje certifikata
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AgentUredjivanje;
