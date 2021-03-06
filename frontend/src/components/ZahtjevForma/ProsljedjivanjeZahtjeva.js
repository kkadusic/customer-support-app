import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { getEmployeesWithEmpRole, forwardIncident } from '../../utilities/serverCall';
import Select from 'react-select';
import { useLocation } from "react-router-dom";
import { getUser } from "../../utilities/localStorage";
import { message } from "antd";
import './zahtjev-forma.css';

const ProsljedjivanjeZahtjeva = () => {

    const history = useHistory();
    const [employees, setEmployees] = useState([]);
    const [option, setOption] = useState(-1);
    const opt = useRef(null);
    const location = useLocation();
    const incident_id = location.state.id;
    const currentUserId = getUser().id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let emp = await getEmployeesWithEmpRole();
                let index = emp.findIndex(function (item, i) {
                    return item.id === Number(currentUserId)
                });
                emp.splice(index, 1);
                setEmployees(emp);
            } catch (error) {
                // console.warn(error);
            }
        }
        fetchData();
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        if (option === -1) alert("Odaberite opciju!");
        else {
            let incidentObj = {employeeId: option, incidentId: incident_id, currentEmployee: Number(currentUserId)};
            const fw = async () => {
                try {
                    await forwardIncident(incidentObj);
                    message.success("Prosljeđivanje uspješno!", 3);
                    history.push("/zahtjevi");
                } catch (error) {
                    alert(error);
                    history.push("/zahtjevi");
                }
            }
            fw();
        }
    }

    const onChange = (e) => {
        setOption(e.value)
    }

    return (
        <div className="prozor">
            <div className="podprozor">
                <h2>Prosljeđivanje zahtjeva</h2>
                <form onSubmit={onSubmit}>
                    <Select className="agenti" onChange={onChange} options={employees.map(item => {
                        return {value: item.id, label: item.firstName + " " + item.lastName}
                    })}/>
                    <button className="forma-btn" type="submit">Proslijedi</button>
                </form>
                <button className="spasi-btn"
                        onClick={() => {
                            history.goBack();
                        }}>
                    Odustani
                </button>
            </div>
        </div>
    );
}

export default ProsljedjivanjeZahtjeva;
