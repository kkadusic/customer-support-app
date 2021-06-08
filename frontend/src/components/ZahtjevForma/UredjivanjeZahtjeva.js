import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useLocation } from "react-router-dom";
import './zahtjev-forma.css';
import { Button, Form, Input, message, Select } from "antd";
import { editIncident } from "../../utilities/serverCall";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";

const UredjivanjeZahtjeva = () => {

    const history = useHistory();
    const location = useLocation();
    const incident = location.state.incident;
    const [form] = Form.useForm();

    const onFinish = async (incidentForm) => {
        const incidentObj = {
            category: {
                name: incidentForm.kategorija
            },
            description: incidentForm.opis,
            id: 500,
            status: incidentForm.status,
            title: incidentForm.naslov
        }
        try {
            await editIncident(incidentObj);
            message.success("Incident ažuriran", 2);
        } catch (error) {
            message.warning(error.response.data.message, 2);
        }
        history.push('/');
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div style={{width: "80%"}} className="prozor">
            <DeleteOutlined className="kantica"
                            onClick={() => {
                                history.goBack();
                            }}
            />
            <Form
                form={form}
                onFinish={onFinish}
                size="small"
                initialValues={{
                    ime: incident.client.firstName,
                    prezime: incident.client.lastName,
                    email: incident.client.email,
                    telefon: incident.client.phoneNumber,
                    drzava: incident.client.country,
                    grad: incident.client.city,
                    naslov: incident.title,
                    opis: incident.description,
                    kategorija: incident.category.name,
                    status: incident.status,
                }}
            >
                <div style={{float: "left", width: "50%"}}>
                    <h3 style={{color: "white"}}> Podaci o klijentu </h3>
                    <Form.Item name="ime" label={<label style={{color: "white"}}>Ime</label>}>
                        <Input placeHolder={incident.client.firstName}/>
                    </Form.Item>
                    <Form.Item name="prezime" label={<label style={{color: "white"}}>Prezime</label>}>
                        <Input placeHolder={incident.client.lastName}/>
                    </Form.Item>
                    <Form.Item name="email" label={<label style={{color: "white"}}>Email</label>}>
                        <Input placeHolder={incident.client.email}/>
                    </Form.Item>
                    <Form.Item name="telefon" label={<label style={{color: "white"}}>Telefon</label>}>
                        <Input placeholder={incident.client.phoneNumber}/>
                    </Form.Item>
                    <Form.Item name="drzava" label={<label style={{color: "white"}}>Drzava</label>}>
                        <Input placeholder={incident.client.country}/>
                    </Form.Item>
                    <Form.Item name="grad" label={<label style={{color: "white"}}>Grad</label>}>
                        <Input placeholder={incident.client.city}/>
                    </Form.Item>
                </div>
                <div>
                    <h3 style={{color: "white"}}> Opis problema </h3>
                    <Form.Item name="naslov" label={<label style={{color: "white"}}>Naslov</label>}>
                        <Input placeholder={incident.title}/>
                    </Form.Item>
                    <Form.Item name="opis" label={<label style={{color: "white"}}>Detaljan opis</label>}>
                        <TextArea placeholder={incident.description}/>
                    </Form.Item>
                    <Form.Item name="kategorija" label={<label style={{color: "white"}}>Kategorija</label>}>
                        <Select
                            placeholder={incident.category.name}
                            allowClear
                        >
                            <Option value="HARDVER">Hardver</Option>
                            <Option value="SOFTVER">Softver</Option>
                            <Option value="OSTALO">Ostalo</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="status" label={<label style={{color: "white"}}>Status</label>}>
                        <Select
                            placeholder={incident.status}
                            allowClear
                        >
                            <Option value="CANCELED">CANCELED</Option>
                            <Option value="PENDING">PENDING</Option>
                            <Option value="DELETED">DELETED</Option>
                            <Option value="UNPROCESSED">UNPROCESSED</Option>
                        </Select>
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default UredjivanjeZahtjeva;
