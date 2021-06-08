import React, { useEffect, useState } from 'react';
import ZahtjevKartica from '../Zahtjevi/ZahtjevKartica';
import Pretraga from '../Pretraga/Pretraga';
import './moji-zahtjevi.css';
import { getMyIncidents } from "../../utilities/serverCall";
import { message } from "antd";
import { getUser } from "../../utilities/localStorage";

const MojiZahtjevi = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = Number(getUser().id);
                setIncidents(await getMyIncidents(id));
            } catch (error) {
                message.warning("Nemate privilegije za ovu akciju", 2);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="prozor">
            <Pretraga/>
            {!incidents.length ?
                (<div>
                    Trenutno nema vama dodjeljenih incidenata
                </div>) :
                (<div className="zahtjevi-grid">
                    {incidents.map(incident => (
                        <ZahtjevKartica key={incident.id} incident={incident}/>
                    ))}
                </div>)
            }
            <button className="lijevi">&lt;&lt;</button>
            <button className="desni">&gt;&gt;</button>
        </div>
    );
}

export default MojiZahtjevi;
