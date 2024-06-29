import Link from "next/link";
import React from "react";

export default function MembersPage() {
  return (
    <div className="flex flex-col w-full bg-amber-200  h-screen align-middle justify-center">
      <h2>MembersPage</h2>

      <Link href={"/"}>Go to Home</Link>
    </div>
  );
}
