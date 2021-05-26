import React, {useEffect, useState} from 'react';
import AgentKartica from './AgentKartica';
import Pretraga from '../Pretraga/Pretraga';
import {getEmployees} from "../../utilities/serverCall";
import {message} from 'antd';

const Agenti = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setAgents(await getEmployees());
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
                {agents.map(agent => (
                    <AgentKartica key={agent.id} agent={agent}/>
                ))}
            </div>
            <button className="lijevi">&lt;&lt;</button>
            <button className="desni">&gt;&gt;</button>
        </div>
    );
}

export default Agenti;
