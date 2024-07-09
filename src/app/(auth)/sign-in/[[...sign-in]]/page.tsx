import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#1B4242]">
      <SignIn />
    </div>
  );
}
