import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  type LucideIcon,
  UserRound,
  MonitorCog,
  University,
} from "lucide-react";
import Link from "next/link";

type IconLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const items = [
  {
    name: "About Me",
    href: "/",
    icon: UserRound,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: MonitorCog,
  },
  {
    name: "Experience",
    href: "/experience",
    icon: University,
  },
] satisfies IconLink[];

export function LeftBar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    tooltip={item.name}
                    render={<Link href={item.href} />}
                  >
                    <item.icon />
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
