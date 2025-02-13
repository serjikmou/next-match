import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-400 to-purple-700"
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[active=true]:text-yellow-500",
        ],
      }}
    >
      <NavbarBrand as={Link} href={"/"}>
        <GiMatchTip size={40} className="text-gray-200" />
        <div className="flex text-3xl font-bold">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-200">Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent>
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button as={Link} href="/login" variant="bordered">
          Login
        </Button>
        <Button as={Link} href="/register" variant="bordered">
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
