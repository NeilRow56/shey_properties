import { GetCurrentUserFromMongoDB } from "@/actions/user";
import { Filters } from "@/components/Filters";
import { Header } from "@/components/Header";
import { Spinner } from "@/components/Loader";
import { Suspense } from "react";
import PropertiesData from "./site/_components/properties-data";

export default function Home() {
  GetCurrentUserFromMongoDB();
  return (
    <div>
      <Header />
      <Filters />
      <Suspense fallback={<Spinner />}>
        <PropertiesData />
      </Suspense>
    </div>
  );
}
