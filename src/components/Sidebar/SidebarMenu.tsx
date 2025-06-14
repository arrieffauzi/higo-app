import { useRouter } from "next/navigation";
import { SidebarData } from "./SidebarData";
import SidebarMenuItem from "./SidebarMenuItem";

interface ISidebarMenu {
  menu: SidebarData[];
}

export const SidebarMenu = (props: ISidebarMenu) => {
  const { menu } = props;
  const route = useRouter();

  return (
    <div className="overflow-y-scroll flex-1">
      {menu.map((item) => (
        <SidebarMenuItem data={item} key={item.label} />
      ))}
    </div>
  );
};
