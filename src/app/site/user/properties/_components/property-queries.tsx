import { GetQueriesbyPropertId } from "@/actions/queries";
import { Property, Query } from "@prisma/client";
import { Modal, Table, message } from "antd";

import dayjs from "dayjs";
import React, { useEffect } from "react";

interface Props {
  showQueriesModal: boolean;
  setShowQueriesModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProperty: Property | null;
}

function PropertyQueries({
  showQueriesModal,
  setShowQueriesModal,
  selectedProperty,
}: Props) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [queries, setQueries] = React.useState<Query[]>([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        setLoading(true);
        const response: any = await GetQueriesbyPropertId(
          selectedProperty?.id || ""
        );
        if (response.error) throw new Error(response.error);
        setQueries(response.data);
      } catch (error: any) {
        message.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedProperty) fetchQueries();
  }, [selectedProperty]);

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
    },
    {
      title: "Customer Monile",
      dataIndex: "phoneNumber",
    },
    {
      title: "Quote Amount",
      dataIndex: "quoteAmount",
      render: (quoteAmount: number) => `$ ${quoteAmount}`,
    },
    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Fate & Time",
      dataIndex: "createdAt",
      render: (createdAt: string) =>
        dayjs(createdAt).format("DD MM YYYY HH:mm A"),
    },
  ];

  return (
    <Modal
      title={`Queries for ${selectedProperty?.name}`}
      open={showQueriesModal}
      onCancel={() => setShowQueriesModal(false)}
      width={1000}
      footer={null}
    >
      <Table columns={columns} dataSource={queries} loading={loading} />
    </Modal>
  );
}

export default PropertyQueries;
