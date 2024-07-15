import { GetCurrentUserFromMongoDB } from "@/actions/user";
import { Header } from "@/components/Header";

export default function Home() {
  GetCurrentUserFromMongoDB();
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl text-primary font-semibold">Home Page</h1>
      </main>
    </div>
  );
}
