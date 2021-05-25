import React, {useEffect, useState} from 'react';
import ZahtjevKartica from '../Zahtjevi/ZahtjevKartica';
import Pretraga from '../Pretraga/Pretraga';
import './moji-zahtjevi.css';
import {getIncidents} from "../../utilities/serverCall";
import {message} from "antd";
import AgentKartica from "../Agenti/AgentKartica";

const SviZahtjevi = () => {

    let zahtjev = {
        datum: "15. Januar 2021.",
        naziv: "Naziv zahtjeva",
        vrijeme: "9:00", opis: "Opis zahtjeva",
        imeKlijenta: "Neko Nekić",
        kontaktKlijenta: "neko@email.com"
    };

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIncidents(await getIncidents());
            } catch (error) {
                message.warning(error.response.data.message);
            }
        }
        fetchData();
    }, []);

    return (

        <div className="prozor">
            <Pretraga/>
            {/*<div className="zahtjevi-grid">*/}
            {/*    <ZahtjevKartica {...zahtjev} />*/}
            {/*    <ZahtjevKartica {...zahtjev} />*/}
            {/*    <ZahtjevKartica {...zahtjev} />*/}
            {/*</div>*/}
            <div className="zahtjevi-grid">
                {incidents.map(incident => (
                    <ZahtjevKartica key={incident.id} incident={incident}/>
                ))}
            </div>
            <button className="lijevi">&lt;&lt;</button>
            <button className="desni">&gt;&gt;</button>
        </div>
    );
}

export default SviZahtjevi;
