import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Button, Form, Input, message, Select } from "antd";
import { addIncident } from "../../utilities/serverCall";
import { Option } from "antd/es/mentions";
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

    const layout = {
        labelCol: {span: 4},
        wrapperCol: {span: 12},
    };

    const tailLayout = {
        wrapperCol: {offset: 4, span: 12},
    };

    return (
        <div className="prozor">
            <DeleteOutlined className="kantica"
                            onClick={() => {
                                history.goBack();
                            }}
            />
            <div className="sadrzaj">
                <Form
                    form={form}
                    onFinish={onFinish}
                    {...layout}
                >
                    <div style={{color: "red"}}>
                        <h2>Podaci o klijentu</h2>
                        <br/>
                        <Form.Item name="firstName" label={<label style={{color: "lightgray"}}>Ime</label>}
                                   rules={[{required: true, message: "Potrebno je unijeti ime!"}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="lastName" label={<label style={{color: "lightgray"}}>Prezime</label>}
                                   rules={[{required: true, message: "Potrebno je unijeti prezime!"}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="email" label={<label style={{color: "lightgray"}}>Email</label>}
                                   rules={[{required: true, message: "Potrebno je unijeti email!"}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="phoneNumber" label={<label style={{color: "lightgray"}}>Telefon</label>}
                                   rules={[{required: true, message: "Potrebno je unijeti telefon!"}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="country" label={<label style={{color: "lightgray"}}>Drzava</label>}
                                   rules={[{required: true, message: "Potrebno je unijeti drzavu!"}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="city" label={<label style={{color: "white"}}>Grad</label>}
                                   rules={[{required: true, message: "Potrebno je unijeti grad!"}]}>
                            <Input/>
                        </Form.Item>
                    </div>

                    <div>
                        <h2>Opis problema</h2>
                        <br/>
                        <Form.Item name="title" label={<label style={{color: "lightgray"}}>Naslov</label>}
                                   rules={[{required: true, message: "Potrebno je unijeti naslov!"}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="category" label={<label style={{color: "lightgray"}}>Kategorija</label>}
                                   rules={[{required: true, message: "Potrebno je odabrati kategoriju!"}]}>
                            <Select defaultValue="HARDVER">
                                <Option value="HARDVER">Hardver</Option>
                                <Option value="SOFTVER">Softver</Option>
                                <Option value="OSTALO">Ostalo</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="description" label={<label style={{color: "lightgray"}}>Detaljan opis</label>}
                                   rules={[{required: true, message: "Potrebno je unijeti detaljan opis!"}]}>
                            <Input/>
                        </Form.Item>
                    </div>

                    <Form.Item {...tailLayout}>
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
