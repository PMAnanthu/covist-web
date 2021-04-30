import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, notification, Row, Layout } from "antd";
import { LockOutlined, MobileOutlined } from "@ant-design/icons";

const { Footer } = Layout;

const Register = () => {
  const [buttonName, setButtonName] = useState("Sigin up");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = (evt) => {
    evt.preventDefault();
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
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
        <h1>CoVist - Registration</h1>
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{
          minHeight: "75vh",
        }}
      >
        <Form name="registeraion" className="form" layout="vertical">
          <Form.Item
            name="firstName"
            label="First Name"
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: "Please input your First Name!",
              },
            ]}
          >
            <Input size="large" placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input size="large" placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name="mobileNumber"
            label="Mobile Number"
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
              placeholder="mobile number"
              type="number"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
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
              Have an account?
              <a onClick={handleRegister}> Sign in</a>
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

export default Register;
