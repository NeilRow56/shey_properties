import React from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Input, Form } from "antd";

export const Location = ({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) => {
  const onFinish = (values: any) => {
    setFinalValues({ ...finalValues, location: values });
    setCurrentStep(currentStep + 1);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={finalValues.location}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="town"
          label="Town"
          rules={[
            {
              required: true,
              message: "Please input town!",
            },
          ]}
        >
          <Input placeholder="Town" />
        </Form.Item>
        <Form.Item
          name="postcode"
          label="Postcode"
          rules={[
            {
              required: true,
              message: "Please input postcode!",
            },
          ]}
        >
          <Input className="w-full" placeholder="Postcode" />
        </Form.Item>
        <Form.Item
          name="landmark"
          label="Landmark"
          rules={[
            {
              required: true,
              message: "Please input landmark!",
            },
          ]}
        >
          <Input placeholder="Landmark" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input address!",
            },
          ]}
          className="col-span-1 lg:col-span-3"
        >
          <Input.TextArea rows={6} placeholder="Address" />
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
