import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import React from "react";

const Lesgo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="px-4 py-2 bg-white font-semibold rounded-md">Lesgo</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/login" className="w-full">
            Log in
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/signup" className="w=full">
            Sign Up
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Lesgo;
