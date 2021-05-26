import React, {useEffect, useState} from 'react';
import ZahtjevKartica from '../Zahtjevi/ZahtjevKartica';
import Pretraga from '../Pretraga/Pretraga';
import './moji-zahtjevi.css';
import {getIncidents} from "../../utilities/serverCall";
import {message} from "antd";

const SviZahtjevi = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIncidents(await getIncidents());
            } catch (error) {
                message.warning(error.response.data.message, 3);
            }
        }
        fetchData();
    }, []);

    return (

        <div className="prozor">
            <Pretraga/>
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
