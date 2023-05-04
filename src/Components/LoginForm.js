import { Button, Form, Input, message } from "antd";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../utils";

class LoginForm extends React.Component {
  state = {
    loading: false,
  };

  onFinish = (data) => {
    this.setState({
      loading: true,
    });
    login(data)
      .then(() => {
        message.success(`Login Successful`);
        this.props.onSuccess();
      })
      .catch((err) => {
        message.error(err.message);
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  };

  render = () => {
    return (
      <Form
        name="normal_login"
        onFinish={this.onFinish}
        style={{
          width: 300,
          margin: "auto",
        }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            style={{ fontSize: "16px", height: "40px", borderRadius: "5px" }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            style={{ fontSize: "16px", height: "40px", borderRadius: "5px" }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={this.state.loading}
            style={{
              width: "95%",
              color: "Snow",
              fontSize: "16px",
              height: "40px",
              borderRadius: "50px",
              border: "PowderBlue",
              backgroundColor: "Turquoise",
              position: "relative",
              left: "2.5%",
            }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    );
  };
}

export default LoginForm;
