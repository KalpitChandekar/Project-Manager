"use client";

import SideBar from "./Components/SideBar";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasksContainer";
import { ProjectWindow } from "./Components/Windows/ProjectWindow";
import { useContextApp } from "./ContexApp";
import { IconWindow } from "./Components/Windows/IconWindow";
import MoreDropDown from "./Components/DropDowns/MoreDropDown";
import ConfirmationWindow from "./Components/Windows/ConfirmationWindow";
export default function Home() {
  const {
    openSideBarObject: { openSideBar },
    sideBarMenuObject: { sideBarMenu },
    openProjectWindowObject: { openProjectWindow },
    openIconWindowObject: { openIconWindow },
    openConfirmationWindowObject: { openConfirmationWindow },
  } = useContextApp();

  const componentMap: Record<number, React.ReactNode> = {
    1: <AllProjects />,
    2: <AllTasksContainer />,
  };

  const ComponentKey = sideBarMenu.findIndex((item) => item.isSelected);

  const selectedComponent = componentMap[ComponentKey + 1] || null;
  return (
    <div className="flex w-full h-screen poppins">
      <ConfirmationWindow />
      <MoreDropDown />
      {(openSideBar || openProjectWindow || openConfirmationWindow) && (
        <div
          className={`w-full h-full ${
            openProjectWindow || openConfirmationWindow ? "z-[70]" : "z-[50]"
          } fixed opacity-30 bg-slate-800`}
        ></div>
      )}
      <SideBar />
      {selectedComponent && selectedComponent}
      {openProjectWindow && <ProjectWindow />}
      {openIconWindow && <IconWindow />}
    </div>
  );
}
