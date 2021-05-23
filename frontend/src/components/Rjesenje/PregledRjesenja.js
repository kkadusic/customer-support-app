import React from 'react';
import {useHistory} from 'react-router';
import './rjesenje.css'

const PregledRjesenja = () => {

    const history = useHistory();

    return (
        <div className="prozor">
            <h1 className="top-naslov">Pregled rješenja</h1>
            <h1 className="unos-rjesenja">ID zahtjeva</h1><br/>
            <div className="sadrzaj">
                <h2>Naslov</h2>
                <input value="Naslov rješenja" disabled={true}/>
                <br/>
                <h2>Rješenje</h2>
                <textarea rows="15">
                    Id cupidatat officia tempor aliqua proident. In anim reprehenderit ea ut minim
                    proident dolor consectetur deserunt enim veniam laboris non elit. Eu anim tempor ex non ut eu.
                    Aute quis amet elit aliquip cupidatat. Incididunt tempor elit occaecat irure do.
                </textarea>
                <button className="spasi"
                        onClick={() => {
                            history.goBack();
                        }}
                >
                    Zatvori
                </button>
            </div>
        </div>
    );
}

export default PregledRjesenja;
