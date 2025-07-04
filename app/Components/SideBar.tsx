"use client";

import { BorderAll, Logout, Splitscreen, TaskAlt } from "@mui/icons-material";
import { useContextApp } from "../ContexApp";
import { useRef, useEffect } from "react";

function SideBar() {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
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
          ? "w-[280px] fixed shadow-xl"
          : "w-[97px] max-[940px]:hidden"
      } h-screen py-8 bg-white flex flex-col items-center justify-between transition-all z-[90]`}
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
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <BorderAll
            className="text-slate-300 cursor-pointer"
            sx={{
              fontSize: "27px",
            }}
          />
          {openSideBar && <span className="text-slate-400">All Projects</span>}
        </div>
        <div className="flex items-center gap-2">
          <Splitscreen
            className="text-orange-600 cursor-pointer"
            sx={{
              fontSize: "25px",
            }}
          />
          {openSideBar && <span className="text-orange-600">All Tasks</span>}
        </div>
        <div className="flex items-center gap-2">
          <Logout
            className="text-slate-300 cursor-pointer"
            sx={{
              fontSize: "25px",
            }}
          />
          {openSideBar && <span className="text-slate-400">Logout</span>}
        </div>
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
