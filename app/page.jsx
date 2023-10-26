import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  ">
        <h1 className="text-3xl font-bold mb-1">Shop Palace</h1>
        <h1 className="text-slate-600 mb-3">Rate your experience</h1>
        <Link href={"/survey"}>
          <Button>Start your survey</Button>
        </Link>
      </div>
    </>
  );
}
