"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { AppType, SideBarMenuItem } from "./types/AppType";

const defaultState: AppType = {
  openSideBarObject: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  sideBarMenuObject: {
    sideBarMenu: [],
    setSiteBarMenu: () => {},
  },
  openProjectWindowObject: {
    openProjectWindow: false,
    setOpenProjectWindow: () => {},
  },
};

const ContextApp = createContext<AppType>(defaultState);

export default function ContextAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [sideBarMenu, setSiteBarMenu] = useState<SideBarMenuItem[]>([
    {
      id: 1,
      name: "All Projects",
      isSelected: true,
    },
    {
      id: 2,
      name: "All Tasks",
      isSelected: false,
    },
    {
      id: 3,
      name: "All Tasks",
      isSelected: false,
    },
  ]);

  const [openProjectWindow, setOpenProjectWindow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 940);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileView) {
      setOpenSideBar(false);
    }
  }, [isMobileView]);

  useEffect(() => {
    setOpenSideBar(false);
  }, [sideBarMenu]);

  return (
    <ContextApp.Provider
      value={{
        openSideBarObject: { openSideBar, setOpenSideBar },
        sideBarMenuObject: { sideBarMenu, setSiteBarMenu },
        openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export function useContextApp() {
  return useContext(ContextApp);
}
