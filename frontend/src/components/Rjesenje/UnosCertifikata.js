import React from 'react';
import './rjesenje.css'
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { addCertificate } from "../../utilities/serverCall";
import { Button, DatePicker, Form, Input, message } from "antd";
import { useLocation } from "react-router-dom";

const UnosCertifikata = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const location = useLocation();
    const agent = location.state.agent;

    const onFinish = async (certificate) => {
        certificate.employeeId = agent.id;
        try {
            await addCertificate(certificate);
            message.success("Certifikat dodan", 2);
        } catch (error) {
            message.warning("Nemate privilegije za ovu akciju", 2);
        }
        history.push('/');
    };

    const onReset = () => {
        form.resetFields();
    };

    const layout = {
        labelCol: {span: 12},
        wrapperCol: {span: 26},
    };

    const tailLayout = {
        wrapperCol: {offset: 10, span: 12},
    };


    return (
        <div className="prozor">
            <DeleteOutlined className="kantica"
                            onClick={() => {
                                history.goBack();
                            }}
            />
            <h1 className="unos-rjesenja">
                {agent.firstName} {agent.lastName}
            </h1>
            <br/>
            <div className="sadrzaj">
                <div className="sadrzaj">
                    <Form
                        form={form}
                        onFinish={onFinish}
                        {...layout}
                    >
                        <Form.Item name="name" label={<label style={{color: "lightgray"}}>Naslov certifikata</label>}
                                   rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="issuingOrganization"
                                   label={<label style={{color: "lightgray"}}>Odgovorna organizacija</label>}
                                   rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="issueDate" label={<label style={{color: "lightgray"}}>Datum izdavanja</label>}
                                   rules={[{required: true}]}>
                            <DatePicker/>
                        </Form.Item>
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
        </div>
    );
}

export default UnosCertifikata;
