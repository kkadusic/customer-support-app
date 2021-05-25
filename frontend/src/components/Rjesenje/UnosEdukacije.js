import React from 'react';
import './rjesenje.css'
import {DeleteOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router';
import {addEducation} from "../../utilities/serverCall";
import {message, Form, Input, Button, DatePicker} from "antd";
import {useLocation} from "react-router-dom";

const UnosEdukacije = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const location = useLocation();
    const agent = location.state.agent;

    const onFinish = async (education) => {
        education.employeeId = agent.id;
        try {
            const id = await addEducation(education);
        } catch (error) {
            message.warning(error.response.data.message);
        }
        message.success("Edukacija dodana");
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
            <h1 className="unos-rjesenja">Ime agenta</h1><br/>
            <div className="sadrzaj">
                <Form
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item name="school" label="Obrazovna institucija" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="degree" label="Stepen edukacije" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="fieldOfStudy" label="Naučna oblast" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="startDate" label="Datum početka" rules={[{required: true}]}>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item name="endDate" label="Datum završetka" rules={[{required: true}]}>
                        <DatePicker/>
                    </Form.Item>
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

export default UnosEdukacije;
