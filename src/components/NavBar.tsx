import React from "react";
import { Plus, Mail, Bell, CircleUserRound } from "lucide-react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const leftSideNav = [
    {
      name: "Item 1",
      href: "/",
    },
    {
      name: "Item 2",
      href: "/",
    },
    {
      name: "Item 3",
      href: "/",
    },
    {
      name: "Item 4",
      href: "/",
    },
    {
      name: "Item 5",
      href: "/",
    },
  ];

  const rightSideNav = [
    { name: "Add", icon: <Plus />, href: "/" },
    { name: "Mail", icon: <Mail />, href: "/" },
    { name: "Notification", icon: <Bell />, href: "/" },
    { name: "Profile", icon: <CircleUserRound />, href: "" },
  ];
  const mobileNav = [...leftSideNav, ...rightSideNav];
  return (
    <nav className="sticky  top-0 z-10 flex md:px-24 px-4 w-full py-4 bg-[#818589]">
      <div className="md:flex hidden whitespace-nowrap justify-start w-full space-x-12 text-white font-bold">
        {leftSideNav.map((nav) => (
          <Link className="text-lg font-bold" key={nav.name} href={nav.href}>
            {nav.name}
          </Link>
        ))}
      </div>
      <div className="md:flex hidden justify-end w-full space-x-6">
        {rightSideNav.map((nav) => (
          <Link href={nav.href} className="text-white" key={nav.name}>
            {nav.icon}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex justify-end w-full">
        <HamburgerMenu mobileNav={mobileNav} />
      </div>
    </nav>
  );
};

export default NavBar;
