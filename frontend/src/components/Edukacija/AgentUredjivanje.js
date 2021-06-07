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
            <h2 className="top-naslov">Profil agenta</h2>
            <div className="forma-grid">
                <div>
                    <h2>Podaci o agentu</h2>
                    <div>
                        <input type="text" id="ime" value={agent.firstName}/>
                        <label htmlFor="ime">Ime</label>
                    </div>
                    <div>
                        <input type="text" id="prezime" value={agent.lastName}/>
                        <label htmlFor="prezime">Prezime</label>
                    </div>
                    <div>
                        <input type="text" id="zanimanje" value="Agent"/>
                        <label htmlFor="telefon">Zanimanje</label>
                    </div>
                    <div>
                        <input type="email" id="email" value={agent.email}/>
                        <label htmlFor="email">E-mail</label>
                    </div>
                </div>
                <div className="dugmad">
                    <button className="dodaj"
                            onClick={() => {
                                history.push({
                                    pathname: '/urediedukacije',
                                    state: {agent: agent}
                                });
                            }}>
                        Ažuriranje edukacija
                    </button>
                    <br/>
                    <button className="dodaj"
                            onClick={() => {
                                history.push({
                                    pathname: '/uredicertifikate',
                                    state: {agent: agent}
                                });
                            }}>
                        Ažuriranje certifikata
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AgentUredjivanje;
