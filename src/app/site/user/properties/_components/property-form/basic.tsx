"use client";
import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { propertyStatuses, propertyTypes } from "@/constants";

export const Basic = ({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) => {
  const onFinish = (values: any) => {
    setFinalValues({ ...finalValues, basic: values });
    setCurrentStep(currentStep + 1);
  };
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      initialValues={finalValues.basic}
    >
      <div className="grid grid-cols-1 gap-5 mt-24">
        <Form.Item
          name="name"
          label="Property Name"
          rules={[
            {
              required: true,
              message: "Please input property name!",
            },
          ]}
        >
          <Input placeholder="Property Name" className="rounded-md" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
        >
          <Input.TextArea rows={6} placeholder="Description" />
        </Form.Item>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: "Please input type!",
            },
          ]}
        >
          <Select options={propertyTypes} />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[
            {
              required: true,
              message: "Please input status!",
            },
          ]}
        >
          <Select options={propertyStatuses} />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber className="w-full" type="number" placeholder="Price" />
        </Form.Item>
      </div>
      <div className="flex justify-end gap-5 mt-7">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button htmlType="submit" type="primary">
          Next
        </Button>
      </div>
    </Form>
  );
};
