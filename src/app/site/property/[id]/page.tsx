/* eslint-disable @next/next/no-img-element */
import { LinkButton } from "@/components/LinkButton";
import db from "@/lib/db";
import { Property } from "@prisma/client";
import React from "react";
import { Carousel } from "antd";

interface Props {
  params: {
    id: string;
  };
}

const IndividualPropertyPage = async ({ params: { id } }: Props) => {
  const property: Property = (await db.property.findUnique({
    where: {
      id: id,
    },
  })) as Property;
  return (
    <div className="mt-12">
      <LinkButton title="Back to Properties" href="/" />
      <h1 className="text-2xl font-bold text-primary my-5">{property.name}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-2">
          <Carousel autoplay>
            {property.images.map((image) => (
              <div key={image}>
                <img
                  src={image}
                  alt={image}
                  className="w-full h-96 lg:h-[450px] object-cover rounded-md"
                />
              </div>
            ))}
          </Carousel>

          <h1 className="text-2xl font-bold text-gray-700 mt-7">
            £ {property.price} - {property.status}
          </h1>

          <p className="text-sm text-gray-600 mt-7">{property.description}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default IndividualPropertyPage;
