import React from 'react';
import './rjesenje.css'
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { addEducation } from "../../utilities/serverCall";
import { message, Form, Input, Button, DatePicker } from "antd";
import { useLocation } from "react-router-dom";

const UnosEdukacije = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const location = useLocation();
    const agent = location.state.agent;

    const onFinish = async (education) => {
        education.employeeId = agent.id;
        try {
            await addEducation(education);
            message.success("Edukacija dodana", 3);
        } catch (error) {
            message.warning(error.response.data.message, 3);
        }
        history.push('/');
    };

    const onReset = () => {
        form.resetFields();
    };

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };

    const tailLayout = {
        wrapperCol: {offset: 6, span: 12},
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
                <Form
                    form={form}
                    onFinish={onFinish}
                    {...layout}
                >
                    <Form.Item name="school" label={<label style={{color: "white"}}>Obrazovna institucija</label>}
                               rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="degree" label={<label style={{color: "white"}}>Stepen edukacije</label>}
                               rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="fieldOfStudy" label={<label style={{color: "white"}}>Naučna oblast</label>}
                               rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="startDate" label={<label style={{color: "white"}}>Datum početka</label>}
                               rules={[{required: true}]}>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item name="endDate" label={<label style={{color: "white"}}>Datum završetka</label>}
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
    );
}

export default UnosEdukacije;
