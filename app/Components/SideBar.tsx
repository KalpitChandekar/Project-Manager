"use client";

import { BorderAll, Logout, Splitscreen, TaskAlt } from "@mui/icons-material";
import { useContextApp } from "../ContexApp";
import { useRef, useEffect } from "react";
import { SvgIconProps } from "@mui/material";

function SideBar() {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
    sideBarMenuObject: { sideBarMenu, setSiteBarMenu },
  } = useContextApp();

  const sideBarMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sideBarMenuRef.current &&
        !sideBarMenuRef.current.contains(event.target as Node)
      ) {
        setOpenSideBar(false);
      }
    }
    if (openSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSideBar, setOpenSideBar]);

  return (
    <div
      ref={sideBarMenuRef}
      className={` ${
        openSideBar
          ? "max-[600px]:w-[250px] w-[290px] fixed shadow-xl"
          : "w-[97px] max-[940px]:hidden"
      } h-screen py-10 bg-white flex flex-col items-center justify-between transition-all z-[60]`}
    >
      <Logo />
      <Menu />
      <Profile />
    </div>
  );

  function Profile() {
    return (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-orange-600 rounded-md"></div>
        {openSideBar && (
          <ul>
            <li className="text-[14px] font-bold">John Doe</li>
            <li className="text-[11px] text-slate-400">john.doe@example.com</li>
          </ul>
        )}
      </div>
    );
  }

  function Menu() {
    const iconMap: Record<string, React.ComponentType<SvgIconProps>> = {
      "1": BorderAll,
      "2": Splitscreen,
      "3": Logout,
    };

    function handleClickedItem(id: number) {
      const updateMenuSideBar = sideBarMenu.map((item) => {
        if (item.id === id) {
          return { ...item, isSelected: true };
        }
        return { ...item, isSelected: false };
      });
      setSiteBarMenu(updateMenuSideBar);
    }

    return (
      <div className="flex flex-col gap-6">
        {sideBarMenu.map((menuItem) => {
          const IconComponent = iconMap[menuItem.id.toString()];
          return (
            <div
              onClick={() => {
                if (menuItem.id === 1 || menuItem.id === 2) {
                  handleClickedItem(menuItem.id);
                }
              }}
              key={menuItem.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <IconComponent
                className={`${
                  menuItem.isSelected ? "text-orange-600" : "text-slate-300"
                }`}
                sx={{
                  fontSize: "25px",
                }}
              />
              {openSideBar && (
                <span
                  className={`${
                    menuItem.isSelected ? "text-orange-600" : "text-slate-300"
                  }`}
                >
                  {menuItem.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function Logo() {
    return (
      <div className="flex items-center gap-2 justify-center">
        <TaskAlt
          className="text-orange-600 font-bold"
          sx={{
            fontSize: "41px",
          }}
        />
        {openSideBar && (
          <div className="text-xl flex items-center gap-1">
            <span className="font-bold">Project</span>
            <span className="text-slate-600">Manager</span>
          </div>
        )}
      </div>
    );
  }
}

export default SideBar;
