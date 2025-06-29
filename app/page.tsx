import SideBar from "./Components/SideBar";
// import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/AllTasksContainer";

export default function Home() {
  return (
    <div className="flex w-full h-screen poppins">
      <SideBar />
      {/* <AllProjects /> */}
      <AllTasksContainer />
    </div>
  );
}
