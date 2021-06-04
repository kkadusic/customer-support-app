import React, { useEffect, useState } from 'react';
import { message, Spin } from "antd";
import { getIncidents } from "../../utilities/serverCall";
import Chart from "./Chart";

const Statistics = () => {

    const [incidents, setIncidents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setIncidents(await getIncidents());
                setLoading(false);
            } catch (error) {
                setLoading(false);
                message.warning("Trenutno nema incidenata", 3);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='second-tab'>
            {loading ? <Spin size="large"/> :
                <Chart incidents={incidents}/>
            }
        </div>
    )
}

export default Statistics;
