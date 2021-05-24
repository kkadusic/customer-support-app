import React from 'react';
import {useHistory} from 'react-router';
import './agenti.css';

const AgentKartica = ({agent}) => {

    const history = useHistory();

    return (
        <div className="kartica-agent">
            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                 alt="profilna"
            />
            <div className="ime-zvanje">
                <h2 className="ime-prezime-agent">{agent.firstName} {agent.lastName}</h2>
                {/*<p className="zvanje-agent">Agent</p>*/}
            </div>
            <button className="pregled"
                    onClick={() => {
                        history.push({
                            pathname: '/pregledagenta',
                            state: {agent: agent}
                        });
                    }}
            >
                Pregled
            </button>
            <button className="uredi"
                    onClick={() => {
                        history.push({
                            pathname: '/urediagenta',
                            state: {agent: agent}
                        });
                    }}
            >
                Uređivanje
            </button>
            <button className="brisi">
                Brisanje
            </button>
        </div>
    );
}

export default AgentKartica;
