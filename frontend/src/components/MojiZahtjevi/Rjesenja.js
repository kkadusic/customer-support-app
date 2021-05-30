import React, {useEffect, useState} from 'react';
import {message, Spin, Table} from "antd";
import {getSolutions} from "../../utilities/serverCall";
import './moji-zahtjevi.css';

const Rjesenja = () => {

    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const solutionsObj = await getSolutions();
                setSolutions(solutionsObj);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                message.warning(error.response.data.message, 3);
            }
        }
        fetchData();
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id
        },
        {
            title: 'Naslov',
            dataIndex: 'title',
            key: 'title',
            sorter: (a, b) => {
                return a.naslov.localeCompare(b.naslov);
            }
        },
        {
            title: 'Datum kreiranja',
            dataIndex: 'dateCreated',
            key: 'dateCreated',
        },
        {
            title: 'Opis',
            dataIndex: 'description',
            key: 'description',
            width: '30%'
        },
        {
            title: 'Employee ID',
            dataIndex: ["employee", "id"],
            key: 'employeeId',
            sorter: (a, b) => a.employee.id - b.employee.id
        },
        {
            title: 'First name',
            dataIndex: ["employee", "firstName"],
            key: 'firstName',
            sorter: (a, b) => {
                return a.employee.firstName.localeCompare(b.employee.firstName);
            }
        },
        {
            title: 'Last name',
            dataIndex: ["employee", "lastName"],
            key: 'lastName',
            sorter: (a, b) => {
                return a.employee.lastName.localeCompare(b.employee.lastName);
            }
        }
    ];

    return (
        <div className="prozor" style={{width: "80%"}}>
            {loading ? <Spin size="large"/> : <Table dataSource={solutions} columns={columns}/>}
        </div>
    );
}

export default Rjesenja;
