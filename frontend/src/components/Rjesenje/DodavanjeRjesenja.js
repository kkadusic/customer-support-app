import React from 'react';
import {DeleteOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router';
import {useLocation} from "react-router-dom";
import {getUser} from "../../utilities/localStorage";
import {Button, Form, Input, message} from "antd";
import {addSolution} from "../../utilities/serverCall";
import './rjesenje.css';

const UnosRjesenja = () => {

    const history = useHistory();
    const location = useLocation();
    const [form] = Form.useForm();
    const incidentId = location.state.incidentId;
    const employeeId = Number(getUser().id);

    const onFinish = async (solution) => {
        solution.incidentId = incidentId;
        solution.employeeId = employeeId;
        try {
            await addSolution(solution);
            message.success("Rjesenje dodano", 3);
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
            <h1 className="unos-rjesenja">
                Id zahtjeva
            </h1>
            <br/>
            <div className="sadrzaj">
                <div className="sadrzaj">
                    <Form
                        form={form}
                        onFinish={onFinish}
                    >
                        <Form.Item name="title" label="Naslov rjesenja" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="description" label="Rjesenje" rules={[{required: true}]}>
                            <Input/>
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
        </div>
    );
}

export default UnosRjesenja;
