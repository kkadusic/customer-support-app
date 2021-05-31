import React, {useEffect, useState} from 'react';
import AgentKartica from './AgentKartica';
import Pretraga from '../Pretraga/Pretraga';
import {getEmployees} from "../../utilities/serverCall";
import {message, Spin} from 'antd';

const Agenti = () => {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setAgents(await getEmployees());
                setLoading(false);
            } catch (error) {
                setLoading(false);
                message.warning(error.response.data.message, 3);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="prozor">
            <Pretraga/>
            {loading ? <Spin size="large"/> :
                <div className="zahtjevi-grid">
                    {agents.map(agent => (
                        <AgentKartica key={agent.id} agent={agent}/>
                    ))}
                </div>
            }
            <button className="lijevi">&lt;&lt;</button>
            <button className="desni">&gt;&gt;</button>
        </div>
    );
}

export default Agenti;
