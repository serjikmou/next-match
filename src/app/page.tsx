import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="text-3xl text-red-500 font-semibold">salam</div>
      <Button
        as={Link}
        href="/members"
        color="primary"
        variant="bordered"
        startContent={<FaRegSmile size={20} />}
      >
        CLICK MI!
      </Button>
    </div>
  );
}
