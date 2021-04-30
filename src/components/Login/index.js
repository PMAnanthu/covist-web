import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, notification, Row, Layout } from "antd";
import { LockOutlined, MobileOutlined } from "@ant-design/icons";

const { Footer } = Layout;

import "./index.scss";

const Login = () => {
  const [buttonName, setButtonName] = useState("Login");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = (evt) => {
    evt.preventDefault();
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: `url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)`,
      }}
    >
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{
          minHeight: "10vh",
        }}
      >
        <h1>CoVist</h1>
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{
          minHeight: "75vh",
        }}
      >
        <Form name="userLogin" className="form">
          <Form.Item
            name="userName"
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: "Please input your Mobile Number!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<MobileOutlined />}
              placeholder="mobile number"
              type="number"
            />
          </Form.Item>
          <Form.Item
            name="password"
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                whitespace: true,
                min: 8,
                message: "Please input valid Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              size="large"
              placeholder="password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="login-button"
              loading={isSubmitting}
            >
              {buttonName}
            </Button>
            <div className="form-register">
              Or <a onClick={handleRegister}>Register Now!</a>
            </div>
          </Form.Item>
        </Form>
      </Row>
      <Footer style={{ textAlign: "center" }}>
        covist.app@gmail.com ©2021
      </Footer>
    </Layout>
  );
};

export default Login;
