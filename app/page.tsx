"use client";

import SideBar from "./Components/SideBar";
// import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasksContainer";
import { useContextApp } from "./ContexApp";
export default function Home() {
  const {
    openSideBarObject: { openSideBar },
  } = useContextApp();
  return (
    <div className="flex w-full h-screen poppins">
      {openSideBar && (
        <div className="w-full h-full z-50 fixed opacity-30 bg-slate-800"></div>
      )}
      <SideBar />
      {/* <AllProjects /> */}
      <AllTasksContainer />
    </div>
  );
}
