import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // adjust path
import { HamburgerMenuIcon } from "@radix-ui/react-icons"; // install with `npm install @radix-ui/react-icons`

const Navbar: React.FC = () => (
  <div className="bg-slate-700 p-4 shadow-lg flex justify-end">
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-green-400 p-2 rounded-xl hover:bg-green-500 transition">
        <HamburgerMenuIcon className="w-6 h-6 text-white" aria-label="Menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default Navbar;
