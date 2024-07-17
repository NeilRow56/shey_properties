"use client";

import { Button, Form, Input, InputNumber, Modal } from "antd";
import React, { useState } from "react";

const QueryModal = ({ propertyId }: { propertyId: string }) => {
  const [showQueryModal, setShowQueryModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {};

  return (
    <div className="mt-7">
      <Button block onClick={() => setShowQueryModal(true)}>
        Query For More Info.
      </Button>
      {showQueryModal && (
        <Modal
          open={showQueryModal}
          onCancel={() => setShowQueryModal(false)}
          title="Send a Query to the Owner"
          centered
          width={600}
          footer={null}
        >
          <Form
            layout="vertical"
            name="query-form"
            onFinish={onFinish}
            className="flex flex-col gap-5"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="quoteAmount"
              label="Quote Amount"
              rules={[
                { required: true, message: "Please enter your quote amount" },
              ]}
            >
              <InputNumber className="w-full" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={2} />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[{ required: true, message: "Please enter your phone" }]}
            >
              <Input />
            </Form.Item>

            <div className="flex justify-end gap-5">
              <Button
                htmlType="button"
                onClick={() => setShowQueryModal(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Send
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default QueryModal;
