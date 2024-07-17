"use client";

import { Button, Form, Modal } from "antd";
import React, { useState } from "react";

const QueryModal = ({ propertyId }: { propertyId: string }) => {
  const [showQueryModal, setShowQueryModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
          <Form>Form</Form>
        </Modal>
      )}
    </div>
  );
};

export default QueryModal;
