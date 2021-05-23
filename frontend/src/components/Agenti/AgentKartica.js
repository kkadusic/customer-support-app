import React from 'react';
import {useHistory} from 'react-router';
import './agenti.css';

const AgentKartica = (props) => {

    const history = useHistory();

    return (
        <div className="kartica-agent">
            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                 alt="profilna"
            />
            <div className="ime-zvanje">
                <h2 className="ime-prezime-agent">{props.ime} {props.prezime}</h2>
                <p className="zvanje-agent">{props.zvanje}</p>
            </div>
            <button className="pregled"
                    onClick={() => {
                        history.push("/pregledagenta")
                    }}
            >
                Pregled
            </button>
            <button className="uredi"
                    onClick={() => {
                        history.push("/urediagenta")
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
