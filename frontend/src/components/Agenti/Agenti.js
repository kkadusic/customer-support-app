import React, {useEffect, useState} from 'react';
import AgentKartica from './AgentKartica';
import Pretraga from '../Pretraga/Pretraga';
import {getEmployees} from "../../utilities/serverCall";

const Agenti = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setAgents(await getEmployees());
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="prozor">
            <Pretraga/>
            <div className="zahtjevi-grid">
                {agents.map(agent => (
                    <AgentKartica agent={agent}/>
                ))}
            </div>
            <button className="lijevi">&lt;&lt;</button>
            <button className="desni">&gt;&gt;</button>
        </div>
    );
}

export default Agenti;
