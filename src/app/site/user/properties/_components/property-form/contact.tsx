import React, { useState } from "react";
import { PropertiesFormStepProps } from ".";
import { Button, Form, Input, Select, message } from "antd";
import { UploadFilesToFirebaseAndReturnUrls } from "@/helpers/upload-media";

export const Contact = ({
  currentStep,
  setCurrentStep,
  finalValues,
  setFinalValues,
}: PropertiesFormStepProps) => {
  const onFinish = async (values: any) => {
    try {
      const tempFinalValues = { ...finalValues, contact: values };

      // handle media upload
      const tempMedia = tempFinalValues.media;
      tempMedia.images = await UploadFilesToFirebaseAndReturnUrls(
        tempMedia.newlyUploadedFiles
      );

      tempFinalValues.media = tempMedia;
      console.log(tempFinalValues);
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      initialValues={finalValues.contact}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Form.Item
          name="ownerName"
          label="Owner Name"
          rules={[
            {
              required: true,
              message: "Please input owner name!",
            },
          ]}
        >
          <Input placeholder="Owner Name" />
        </Form.Item>
        <Form.Item
          name="ownerEmail"
          label="Owner Email"
          rules={[
            {
              required: true,
              message: "Please input owner email!",
            },
          ]}
        >
          <Input placeholder="Owner Email" />
        </Form.Item>
        <Form.Item
          name="ownerPhone"
          label="Owner Phone"
          rules={[
            {
              required: true,
              message: "Please input owner phone!",
            },
          ]}
        >
          <Input placeholder="Owner Phone" />
        </Form.Item>

        <Form.Item
          name="showOwnerContact"
          label="Show Owner Contact"
          rules={[
            {
              required: true,
              message: "Please input show owner contact!",
            },
          ]}
        >
          <Select
            options={[
              { label: "Yes", value: true },
              { label: "No", value: false },
            ]}
          />
        </Form.Item>
      </div>
      <div className="flex justify-end gap-5 mt-7">
        <Button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </Button>
        <Button type="primary" htmlType="submit">
          Save Property
        </Button>
      </div>
    </Form>
  );
};
