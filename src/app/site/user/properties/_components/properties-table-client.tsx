"use-client";

import { Property } from "@prisma/client";

export const PropertiesTableClientide = ({
  properties,
}: {
  properties: Property[];
}) => {
  return (
    <div>
      <div>Properties Table Client Side</div>
      <div></div>
      {properties
        ? properties.map((property) => (
            <div key={property.id}>{property.name}</div>
          ))
        : ""}
    </div>
  );
};
