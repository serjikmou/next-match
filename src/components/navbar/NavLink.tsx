"use client";
import { Link, NavbarItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  label: string;
};
export default function NavLink({ href, label }: Props) {
  const pathName = usePathname();
  return (
    <NavbarItem isActive={href === pathName} as={Link} href={href}>
      {label}
    </NavbarItem>
  );
}
