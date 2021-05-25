import React from 'react';
import './rjesenje.css'
import {DeleteOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router';
import {addCertificate} from "../../utilities/serverCall";
import {Button, DatePicker, Form, Input, message} from "antd";
import {useLocation} from "react-router-dom";

const UnosCertifikata = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const location = useLocation();
    const agent = location.state.agent;

    const onFinish = async (certificate) => {
        certificate.employeeId = agent.id;
        try {
            const id = await addCertificate(certificate);
        } catch (error) {
            message.warning(error.response.data.message);
        }
        message.success("Certificate saved.");
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
                {/*<h2>Naslov certifikata*</h2>*/}
                {/*<input type="text" placeholder="Naslov certifikata"/>*/}
                {/*<br/>*/}
                {/*<h2>Odgovorna organizacija*</h2>*/}
                {/*<input type="text" placeholder="Naslov certifikata"/>*/}
                {/*<br/>*/}
                {/*<h2>Datum izdavanja*</h2>*/}
                {/*<input type="date"/>*/}
                {/*<br/>*/}
                {/*<button className="spasi">Spasi</button>*/}
                <div className="sadrzaj">
                    <Form
                        form={form}
                        onFinish={onFinish}
                    >
                        <Form.Item name="name" label="Naslov certifikata" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="issuingOrganization" label="Odgovorna organizacija" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="issueDate" label="Datum izdavanja" rules={[{required: true}]}>
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
        </div>
    );
}

export default UnosCertifikata;
