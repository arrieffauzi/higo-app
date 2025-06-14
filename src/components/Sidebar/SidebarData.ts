export interface SidebarData {
  label: string;
  href?: string;
  logo?: string;
  logoActive?: string;
  code?: string;
  children?: SidebarData[];
  badge?: string;
}

export const SIDEBAR_DATA: SidebarData[] = [
  {
    label: "Dashboard",
    href: "/main",
    logo: "/icons/icon-menu-dashboard.svg",
    logoActive: "/icons/icon-menu-dashboard.svg",
  },
];
