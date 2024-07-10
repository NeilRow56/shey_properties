import Link from "next/link";
import { Button } from "./ui/button";

type LinkButtonProps = {
  title: string;
  href: string;
};

export const LinkButton = ({ title, href }: LinkButtonProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className="border-[#1B4242] p-3 text-lg text-[#1B4242]"
    >
      <Link className="" href={href}>
        {title}
      </Link>
    </Button>
  );
};
