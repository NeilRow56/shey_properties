/* eslint-disable @next/next/no-img-element */
import db from "@/lib/db";
import { Property } from "@prisma/client";
import Link from "next/link";
import React from "react";

const PropertiesData = async () => {
  const properties: Property[] = await db.property.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 ">
      {properties.slice(0, 6).map((property) => (
        <div
          key={property.id}
          className="border rounded border-solid w-[500px] 2xl:w-[455px] container mx-auto border-gray-300 overflow-hidden "
        >
          <img
            src={property.images[0]}
            alt=""
            className="w-full h-[350px] object-fit rounded-t property-main-image"
          />
          <div className="p-3 flex flex-col">
            <span className="text-sm text-primary font-bold">
              {property.name}
            </span>
            <span className="text-gray-700 text-xs">
              {property.city} , {property.landmark}
            </span>
          </div>

          <div className="p-3 bg-gray-100 flex justify-between items-center rounded-b">
            <span className="text-primary text-xl font-bold">
              £ {property.price}
            </span>
            <Link
              className="text-sm text-primary font-semibold no-underline"
              href={`/site/property/${property.id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesData;
