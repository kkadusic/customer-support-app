import React from 'react';
import {DeleteOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router';
import {Button, Form, Input, message, Select} from "antd";
import {addIncident} from "../../utilities/serverCall";
import {Option} from "antd/es/mentions";
import './zahtjev-forma.css';

const UnosZahtjeva = () => {

    const history = useHistory();
    const [form] = Form.useForm();

    const onFinish = async (incidentObj) => {
        const incident = {
            category: {
                name: incidentObj.category
            },
            client: {
                city: incidentObj.city,
                country: incidentObj.country,
                email: incidentObj.email,
                firstName: incidentObj.firstName,
                lastName: incidentObj.lastName,
                phoneNumber: incidentObj.phoneNumber
            },
            description: incidentObj.description,
            title: incidentObj.title
        };
        try {
            await addIncident(incident);
            message.success("Incident dodan", 3);
        } catch (error) {
            message.warning(error.response.data.message, 3);
        }
        history.push('/');
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className="prozor">
            <DeleteOutlined className="kantica"
                            onClick={() => {
                                history.goBack();
                            }}
            />
            <br/>
            <div className="sadrzaj">
                <Form
                    form={form}
                    onFinish={onFinish}
                >
                    <div>
                        <h2>Podaci o klijentu</h2>
                        <br/>
                        <Form.Item name="firstName" label="Ime" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="lastName" label="Prezime" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="email" label="Email" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="phoneNumber" label="Telefon" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="country" label="Drzava" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="city" label="Grad" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                    </div>

                    <div>
                        <h2>Opis problema</h2>
                        <br/>
                        <Form.Item name="title" label="Naslov" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="category" label="Kategorija" rules={[{required: true}]}>
                            <Select defaultValue="HARDVER">
                                <Option value="HARDVER">Hardver</Option>
                                <Option value="SOFTVER">Softver</Option>
                                <Option value="OSTALO">Ostalo</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="description" label="Detaljan opis" rules={[{required: true}]}>
                            <Input/>
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
        </div>
    );
}

export default UnosZahtjeva;
