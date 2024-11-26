import { Row, Grid, Col, Form, Input, Select, Button, Typography } from "antd";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const App = () => {
  const screens = useBreakpoint();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main
      style={{
        margin: "0 auto",
        borderRadius: "8px",
        paddingLeft: "20px",
        paddingRight: "20px",
        textAlign: "center",
      }}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "30px",
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {!screens.xs && (
          <Title level={5} style={{ textAlign: "center" }}>
            Contact Us
          </Title>
        )}

        {screens.xs ? (
          <Paragraph
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "-5px",
              marginBottom: "30px",
            }}
          >
            Book Appointment
          </Paragraph>
        ) : (
          <Title
            level={1}
            style={{
              textAlign: "center",
              marginTop: "-5px",
              marginBottom: "30px",
            }}
          >
            Make an Appointment
          </Title>
        )}

        <div style={{ width: "100%" }}>
          <Row gutter={16} justify="center">
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                name="fullName"
                label={screens.xs ? "Full Name *" : null}
                rules={[
                  { required: true, message: "Please input your full name!" },
                ]}
              >
                <Input
                  placeholder="Full Name *"
                  style={{ padding: "10px", background: "#f5f6f7" }}
                />
              </Form.Item>
            </Col>
            <Col span={screens.xs ? 24 : 12}>
              <Form.Item
                name="email"
                label={screens.xs ? "Email *" : null}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input
                  placeholder="Email *"
                  style={{ padding: "10px", background: "#f5f6f7" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Row gutter={16} justify="center">
              <Col span={screens.xs ? 24 : 12}>
                <Form.Item
                  name="department"
                  label={screens.xs ? "Department *" : null}
                >
                  <Select style={{ width: "100%" }} placeholder="Please Select">
                    <Select.Option value="CSE">CSE</Select.Option>
                    <Select.Option value="ECE">ECE</Select.Option>
                    <Select.Option value="ME">ME</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={screens.xs ? 24 : 12}>
                <Form.Item
                  name="available"
                  label={screens.xs ? "Time *" : null}
                >
                  <Select
                    style={{ width: "100%" }}
                    placeholder="4:00 Available"
                  >
                    <Select.Option value="4:00">4:00 PM</Select.Option>
                    <Select.Option value="5:00">5:00 PM</Select.Option>
                    <Select.Option value="6:00">6:00 PM</Select.Option>
                    <Select.Option value="7:00">7:00 PM</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </div>
        {!screens.xs && (
          <Form.Item name="message">
            <Input.TextArea
              rows={8}
              placeholder="Message"
              style={{ backgroundColor: "#f5f6f7" }}
            />
          </Form.Item>
        )}
        <Form.Item
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "200px", padding: "25px" }}
          >
            Book Appointment
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
};

export default App;
