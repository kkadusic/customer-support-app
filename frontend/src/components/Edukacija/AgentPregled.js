import React from 'react';
import {useHistory} from 'react-router';
import './certifikati-edukacije.css';
import {useLocation} from "react-router-dom";

const AgentPregled = () => {

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
                    <input type="text" id="ime" disabled={true} value={agent.firstName}/>
                    <label htmlFor="ime">Ime</label>
                    <input type="text" id="prezime" disabled={true} value={agent.lastName}/>
                    <label htmlFor="prezime">Prezime</label>
                    <input type="text" id="zanimanje" disabled={true} value="Agent"/>
                    <label htmlFor="telefon">Zanimanje</label>
                    <input type="email" id="email" disabled={true} value={agent.email}/>
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="dugmad">
                    <button className="dodaj"
                            onClick={() => {
                                history.push({
                                    pathname: '/preglededukacija',
                                    state: {educations: agent.educations}
                                });
                            }}>
                        Pregled edukacija
                    </button>
                    <br/>
                    <button className="dodaj"
                            onClick={() => {
                                history.push({
                                    pathname: '/pregledcertifikata',
                                    state: {certificates: agent.certificates}
                                });
                            }}>
                        Pregled certifikata
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AgentPregled;
