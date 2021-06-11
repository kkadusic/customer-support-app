import React, { useEffect, useState } from 'react';
import { Button, message, Spin, Table } from "antd";
import { getSolutions } from "../../utilities/serverCall";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import { DownloadOutlined } from "@ant-design/icons";
import './moji-zahtjevi.css';
import { parseDateTime } from "../../utilities/date";

const Rjesenja = () => {

    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const solutionsObj = await getSolutions();
                for (let i = 0; i < solutionsObj.length; i++) {
                    solutionsObj[i].dateCreated = parseDateTime(solutionsObj[i].dateCreated);
                }
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
                return a.title.localeCompare(b.title);
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

    const generateReport = () => {
        let usersForReport = [];
        for (let i = 0; i < solutions.length; i++) {
            let userObj = Object.values({
                id: solutions[i].id,
                title: solutions[i].title,
                description: solutions[i].description,
                dateCreated: solutions[i].dateCreated,
                employeeId: solutions[i].employee.id,
                employeeFirstName: solutions[i].employee.firstName,
                employeeLastName: solutions[i].employee.lastName
            });
            usersForReport.push(userObj);
        }
        const doc = new jsPDF();
        doc.autoTable({
            head: [['ID', 'Naslov', 'Opis', 'Datum', 'Agent ID', 'Ime', 'Prezime']],
            body: usersForReport
        })
        doc.save('Rjesenja.pdf');
    };

    return (
        <div className="prozor" style={{width: "80%"}}>
            {loading ? <Spin size="large"/> :
                <>
                    <Table dataSource={solutions} columns={columns}/>
                    <Button onClick={generateReport}>PDF izvještaj<DownloadOutlined/></Button>
                </>
            }
        </div>
    );
}

export default Rjesenja;
