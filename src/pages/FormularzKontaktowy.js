import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";

const FormularzKontaktowy = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4
          },
          wrapperCol: {
            span: 14
          }
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4
          }
        }
      : null;
  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout
        }}
        onValuesChange={onFormLayoutChange}
      >
        <h1 class="h1">Formularz Rejestracji</h1>
        <Form.Item label="Imię">
          <Input placeholder="proszę podać imię" />
        </Form.Item>
        <Form.Item label="Nazwisko">
          <Input placeholder="proszę podać nazwisko" />
        </Form.Item>
        <Form.Item label="Nazwisko">
          <Input placeholder="proszę podać nazwisko" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Wyślij formularz</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormularzKontaktowy;
