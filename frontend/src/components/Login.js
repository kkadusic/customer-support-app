import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import '../css/login.css'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const Login = () => {

    const onFinish = (value) => {
        console.log(value)
    }

    return (
        <div className="outer-box">
            <p className="title-text">Prijava</p>
        <div className="login-div">
            
        <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: false, username: '', password: ''
        }}
        onFinish={onFinish}
        className="login-form"
      >
        <p className="login-label">Korisničko ime ili e-mail *</p>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Unesite vaš email!',
            },
          ]}
         
        >
          <Input  placeholder="Korisničko ime ili e-mail"/>
        </Form.Item>

        <p className="login-label pass">Šifra *</p>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Unesite vašu šifru!',
            },
          ]}
          
        >
          <Input.Password placeholder="Šifra"/>
        </Form.Item>
  

  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="submit-button" >
            Prijavi se
          </Button>
        </Form.Item>
      </Form>
      <p id="reg-reminder">Nemate račun? <a href="/register">Registrirajte se!</a></p>
      </div>
      </div>
    )
}

export default Login
