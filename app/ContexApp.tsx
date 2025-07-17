"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { AppType, IconData, SideBarMenuItem } from "./types/AppType";
import { allIconsArray } from "./Data/AllIcons";
import { Project, projectsData } from "./Data/AllProjects";

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
  allIconDataObject: {
    allIconData: [],
    setAllIconData: () => {},
  },
  selectedIconObject: {
    selectedIcon: null,
    setSelectedIcon: () => {},
  },
  openIconWindowObject: {
    openIconWindow: false,
    setOpenIconWindow: () => {},
  },
  allProjectsObject: {
    allProjects: [],
    setAllProjects: () => {},
  },
  dropDownPositionObject: {
    dropDownPosition: {
      top: 0,
      left: 0,
    },
    setDropDownPosition: () => {},
  },
  openDropDownObject: {
    openDropDown: false,
    setOpenDropDown: () => {},
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
  const [allIconData, setAllIconData] = useState<IconData[]>(allIconsArray);
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
  const [openIconWindow, setOpenIconWindow] = useState(false);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [dropDownPosition, setDropDownPosition] = useState({
    top: 0,
    left: 0,
  });
  const [openDropDown, setOpenDropDown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 940);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setAllProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchData();
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
        allIconDataObject: { allIconData, setAllIconData },
        openIconWindowObject: { openIconWindow, setOpenIconWindow },
        selectedIconObject: { selectedIcon, setSelectedIcon },
        allProjectsObject: { allProjects, setAllProjects },
        dropDownPositionObject: { dropDownPosition, setDropDownPosition },
        openDropDownObject: { openDropDown, setOpenDropDown },
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export function useContextApp() {
  return useContext(ContextApp);
}
