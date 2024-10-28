import React from "react";
import { Plus, Mail, Bell, CircleUserRound } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const leftSideNav = [
    {
      label: "Item 1",
      href: "/",
    },
    {
      label: "Item 2",
      href: "/",
    },
    {
      label: "Item 3",
      href: "/",
    },
    {
      label: "Item 4",
      href: "/",
    },
    {
      label: "Item 5",
      href: "/",
    },
  ];

  const rightSideNav = [
    { name: "Add", icon: <Plus />, href: "/" },
    { name: "Mail", icon: <Mail />, href: "/" },
    { name: "Notification", icon: <Bell />, href: "/" },
    { name: "Profile", icon: <CircleUserRound />, href: "" },
  ];
  return (
    <nav className="relative flex px-24  w-full py-4 bg-[#818589]">
      <div className="flex justify-start w-full space-x-12 text-white font-bold">
        {leftSideNav.map((nav) => (
          <Link
          className="text-lg font-bold"
          href={nav.href}>{nav.label}</Link>
        ))}
      </div>
      <div className="flex justify-end w-full space-x-6">
        {rightSideNav.map((nav) => (
            <Link href={nav.href} className="text-white">
           {nav.icon}
            </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
