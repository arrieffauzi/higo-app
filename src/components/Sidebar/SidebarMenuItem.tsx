"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/common/cn";
import { usePathname } from "next/navigation";
import { SidebarData } from "./SidebarData";
import Link from "next/link";
import Button from "../common/Button/Button";
import SidebarSubMenutItem from "./SidebarSubMenuItem";

interface IdataSidebar {
  data: SidebarData;
}

const SidebarMenuItem = (props: IdataSidebar) => {
  const { data } = props;
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  const matchPath = pathname === data.href;

  useEffect(() => {
    if (data?.code) {
      setToggle(pathname.includes(data?.code));
    }
  }, [pathname, data?.code]);

  return (
    <Link href={data.href ?? "#"}>
      <Button
        className="w-full"
        variant="none"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={cn(
            "py-4 px-6 text-sm text-[#272727] w-full flex justify-between text-left",
            matchPath && "bg-[#FFE01B40]",
          )}
        >
          <div className="flex gap-4 items-center">
            {data.logo && (
              <Image
                className="w-auto h-auto"
                src={data.logo ?? ""}
                height={25}
                width={25}
                alt="menu icon"
              />
            )}
            {data.label}
          </div>

          {data.children && (
            <Image
              className={cn(
                "h-full",
                toggle && "rotate-180 transition duration-300",
              )}
              src={"/icons/icon-chevron-down.svg"}
              alt="icon chevron"
              height={15}
              width={15}
            />
          )}
        </div>
      </Button>
      {toggle && data.children && data.children.length > 0 && (
        <div className={toggle && "transition-all delay-150 duration-300"}>
          {data.children.map((item) => (
            <SidebarSubMenutItem data={item} key={item.label} />
          ))}
        </div>
      )}
    </Link>
  );
};

export default SidebarMenuItem;
