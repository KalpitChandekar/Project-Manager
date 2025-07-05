"use client";

import SideBar from "./Components/SideBar";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasksContainer";
import { useContextApp } from "./ContexApp";

export default function Home() {
  const {
    openSideBarObject: { openSideBar },
    sideBarMenuObject: { sideBarMenu },
  } = useContextApp();

  const componentMap: Record<number, React.ReactNode> = {
    1: <AllProjects />,
    2: <AllTasksContainer />,
  };

  const ComponentKey = sideBarMenu.findIndex((item) => item.isSelected);

  const selectedComponent = componentMap[ComponentKey + 1] || null;
  return (
    <div className="flex w-full h-screen poppins">
      {openSideBar && (
        <div className="w-full h-full z-50 fixed opacity-30 bg-slate-800"></div>
      )}
      <SideBar />
      {selectedComponent && selectedComponent}
    </div>
  );
}
