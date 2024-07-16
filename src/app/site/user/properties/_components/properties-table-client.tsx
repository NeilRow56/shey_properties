"use client";

import { DeleteProperty } from "@/actions/properties";
import { Property } from "@prisma/client";
import { Button, Table, message } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const PropertiesTableClientide = ({
  properties,
}: {
  properties: Property[];
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onDelete = async (id: string) => {
    try {
      setLoading(true);
      const response = await DeleteProperty(id);
      if (response.error) throw new Error(response.error);
      message.success(response.message);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const columns: any = [
    {
      title: "Property Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render(price: number) {
        return `£${price}`;
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      render(updatedAt: Date) {
        return dayjs(updatedAt).format("DD MMM YYYY HH:mm A");
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render(value: any, record: Property) {
        return (
          <div className="flex gap-5">
            <Button size="small" onClick={() => {}}>
              Queries
            </Button>
            <Button
              size="small"
              onClick={() => {
                onDelete(record.id);
              }}
            >
              <i className="ri-delete-bin-line"></i>
            </Button>
            <Button
              size="small"
              onClick={() =>
                router.push(`/site/user/properties/create-property${record.id}`)
              }
            >
              <i className="ri-file-copy-line"></i>
            </Button>
            <Button
              size="small"
              onClick={() =>
                router.push(`/site/user/properties/edit-property/${record.id}`)
              }
            >
              <i className="ri-pencil-line"></i>
            </Button>
          </div>
        );
      },
    },
  ];

  // if table is from admin, then show user column
  //   if (fromAdmin) {
  //     columns.unshift({
  //       title: "User",
  //       dataIndex: "user",
  //       key: "user",
  //       render(value: any, record: any) {
  //         return <div className="flex gap-5">{record.user?.username}</div>;
  //       },
  //     });
  //   }
  return (
    <div>
      <div className="capitalize">
        <Table
          dataSource={properties}
          columns={columns}
          loading={loading}
          rowKey="id"
        />
      </div>
    </div>
  );
};
