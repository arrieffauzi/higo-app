"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SidebarMenu } from "./SidebarMenu";
import { SIDEBAR_DATA } from "./SidebarData";
import Logout from "./Logout";

const Sidebar = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="bg-white shadow-md z-50 flex flex-col overflow-y-auto min-w-[210px] w-[295px]">
      <div className="sticky top-0 w-ful z-10 bg-white flex py-4 px-4 justify-between">
        <Link href={"/main"}>
          <p className="text-5xl text-center font-bold">Logo</p>
        </Link>
      </div>
      <SidebarMenu menu={SIDEBAR_DATA} />
      <Logout />
    </div>
  );
};

export default Sidebar;
