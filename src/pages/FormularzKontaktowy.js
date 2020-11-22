import React, { useState } from "react";
import { Form, Input, Button, Radio, Checkbox } from "antd";

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
        <Form.Item label="Email">
          <Input placeholder="proszę podać adres email" />
        </Form.Item>
        <Form.Item label="Telefon">
          <Input placeholder="proszę podać numer telefonu" />
        </Form.Item>
        <Form.Item label="JestemRobotemAlboNie">
          <Radio.Group>
            <Radio value={1}>Jestem robotem</Radio>
            <br/>
            <Radio value={2}>Nie jetem robotem</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Zgody">
          <Checkbox>Zgoda RODO</Checkbox>
          <br/>
          <Checkbox>Zapisz się na newsletter a otrzymasz 10% zniżki</Checkbox>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Wyślij formularz</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormularzKontaktowy;
