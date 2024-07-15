"use client";

import { Property } from "@prisma/client";
import { Button, Table, message } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export const PropertiesTableClientide = ({
  properties,
}: {
  properties: Property[];
}) => {
  const router = useRouter();
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
            <Button size="small" onClick={() => {}}>
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
      <div>Properties Table Client Side</div>
      <div className="capitalize">
        <Table dataSource={properties} columns={columns} rowKey="id" />
      </div>
    </div>
  );
};
