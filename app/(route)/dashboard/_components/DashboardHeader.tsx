import React from "react";
import { ComboboxDemo } from "./Combobox";
import { headerTitle } from "../_constants";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center p-5 border-b">
      <div className="mr-2">
        <ComboboxDemo />
      </div>

      <div className=" hidden text-xs md:text-md  lg:text-lg md:flex gap-2">
        {headerTitle.map((title) => (
          <Link href={title.path} key={title.id}>
            <h1 id='dashboard'className="text-gray-500 hover:text-white">{title.title}</h1>
          </Link>
        ))}
      </div>

      <div className="flex gap-2">
        <Input placeholder="Search..." className="bg-transparent" />
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardHeader;
