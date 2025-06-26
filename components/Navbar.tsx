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
  // 📌 Fixed to top, full width, high z-index
  <nav className="bg-slate-700 p-4 shadow-lg flex justify-end fixed top-0 w-full z-20">
    <DropdownMenu>
    <DropdownMenuTrigger className="bg-gray-700 p-2 rounded-xl hover:bg-black transition">
        <HamburgerMenuIcon className="w-6 h-6 text-white" aria-label="Menu" />
      </DropdownMenuTrigger>
      {/* 📌 Added navigation links for one-page scrolling */}
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Navigate</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="#home">Home</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#accounts">Accounts</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="#contact">Contact</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
);

export default Navbar;
