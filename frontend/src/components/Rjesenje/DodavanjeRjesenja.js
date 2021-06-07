import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useLocation } from "react-router-dom";
import { getUser } from "../../utilities/localStorage";
import { Button, Form, Input, message } from "antd";
import { addSolution } from "../../utilities/serverCall";
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

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 18},
    };

    const tailLayout = {
        wrapperCol: {offset: 6, span: 16},
    };

    return (
        <div className="prozor">
            <DeleteOutlined className="kantica"
                            onClick={() => {
                                history.goBack();
                            }}
            />
            <h1 className="unos-rjesenja">
                Unos rješenja
            </h1>
            <br/>
            <div className="sadrzaj">
                <div className="sadrzaj">
                    <Form
                        form={form}
                        onFinish={onFinish}
                        {...layout}
                    >
                        <Form.Item name="title" label={<label style={{color: "lightgray"}}>Naslov rješenja</label>}
                                   rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="description" label={<label style={{color: "lightgray"}}>Rješenje</label>}
                                   rules={[{required: true}]}>
                            <Input/>
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

export default UnosRjesenja;
