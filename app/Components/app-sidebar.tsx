"use client";

import { BorderAll, Logout, Splitscreen, TaskAlt } from "@mui/icons-material";
import { useContextApp } from "../ContexApp";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { User } from "lucide-react";

const iconMap = {
  1: BorderAll,
  2: Splitscreen,
  3: Logout,
};

export function AppSidebar() {
  const {
    sideBarMenuObject: { sideBarMenu, setSiteBarMenu },
  } = useContextApp();

  function handleClickedItem(id: number) {
    const updateMenuSideBar = sideBarMenu.map((item) => {
      if (item.id === id) {
        return { ...item, isSelected: true };
      }
      return { ...item, isSelected: false };
    });
    setSiteBarMenu(updateMenuSideBar);
  }

  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 justify-center py-4">
          <TaskAlt
            className="text-orange-600 font-bold"
            sx={{ fontSize: "41px" }}
          />
          {state === "expanded" && (
            <div className="text-xl flex items-center gap-1">
              <span className="font-bold">Project</span>
              <span className="text-slate-600">Manager</span>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="flex items-center justify-center">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarMenu.map((menuItem) => {
                const IconComponent =
                  iconMap[menuItem.id as keyof typeof iconMap];
                return (
                  <SidebarMenuItem key={menuItem.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={menuItem.isSelected}
                      onClick={() => {
                        if (menuItem.id === 1 || menuItem.id === 2) {
                          handleClickedItem(menuItem.id);
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <IconComponent
                          className={
                            menuItem.isSelected
                              ? "text-orange-600"
                              : "text-slate-300"
                          }
                          sx={{ fontSize: "25px" }}
                        />
                        <span
                          className={
                            menuItem.isSelected
                              ? "text-orange-600"
                              : "text-slate-300"
                          }
                        >
                          {menuItem.name}
                        </span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 px-4 py-6 mt-auto">
          <User />

          {state === "expanded" && (
            <ul>
              <li className="text-[14px] font-bold">John Doe</li>
              <li className="text-[11px] text-slate-400">
                john.doe@example.com
              </li>
            </ul>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
