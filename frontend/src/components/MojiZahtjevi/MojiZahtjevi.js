import React, {useEffect, useState} from 'react';
import ZahtjevKartica from '../Zahtjevi/ZahtjevKartica';
import Pretraga from '../Pretraga/Pretraga';
import './moji-zahtjevi.css';
import {getMyIncidents} from "../../utilities/serverCall";
import {message} from "antd";
import {getUser} from "../../utilities/localStorage";

const MojiZahtjevi = () => {

    // let zahtjev = {
    //     datum: "15. Januar 2021.",
    //     naziv: "Naziv zahtjeva",
    //     vrijeme: "9:00",
    //     opis: "Opis zahtjeva",
    //     imeKlijenta: "Neko Nekić",
    //     kontaktKlijenta: "neko@email.com"
    // };

    console.log(getUser());

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // TODO send id from logged in employee
                setIncidents(await getMyIncidents(1));
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
            <button className="lijevi">&lt;&lt;</button>
            <button className="desni">&gt;&gt;</button>
        </div>
    );
}

export default MojiZahtjevi;
