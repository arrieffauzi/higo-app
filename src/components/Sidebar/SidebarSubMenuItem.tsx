import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/common/cn";
import Image from "next/image";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import Link from "next/link";
import Button from "../common/Button/Button";

interface IItemSidebar {
  data: SidebarData;
}

const SidebarSubMenutItem = (props: IItemSidebar) => {
  const { data } = props;
  const pathname = usePathname();
  const params = useSearchParams();
  const [toggle, setToggle] = useState(false);

  const matchPath =
    data.href?.includes("transaction") || data.href?.includes("third-party-log")
      ? !params.get("channelID")
        ? data.href === pathname
        : data.href === `${pathname}?channelID=${params.get("channelID")}`
      : pathname === data.href;

  return (
    <Link href={data.href ?? ""}>
      <Button
        className="w-full"
        variant="none"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={cn(
            "pl-12 text-sm text-[#272727] w-full flex justify-between text-left cursor-pointer",
            matchPath && "bg-[#FFE01B40]"
          )}
        >
          <div
            key={data.label}
            className="flex justify-between gap-6 items-center py-4 pl-3 text-sm text-[#272727]"
          >
            {data.label}

            {data.children && (
              <Image
                className={cn(
                  "h-full",
                  toggle && "rotate-180 transition duration-300"
                )}
                src={"/icons/icon-chevron-down.svg"}
                alt="icon chevron"
                height={15}
                width={15}
              />
            )}
          </div>
        </div>
      </Button>
      {/* {toggle && data.children && data.children.length > 0 && (
        <div className={toggle && "transition-all delay-150 duration-300"}>
          {data.children.map((item) => (
            <SubSubitemSidebar data={item} key={item.label} />
          ))}
        </div>
      )} */}
    </Link>
  );
};

export default SidebarSubMenutItem;
