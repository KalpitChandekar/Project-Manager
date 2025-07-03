import AllProjectsSection from "./Components/AllProjectsSection";
import ProjectSubHeader from "./Components/ProjectSubHeader";
import ProjectsHeader from "./Components/ProjectsHeader";
import StatsRightSideBar from "./Components/StatsRightSideBar";
const AllProjects = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
      <StatsRightSideBar />
    </div>
  );

  function AllProjectsArea() {
    return (
      <div className="w-[78%] max-lg:w-full p-10 max-sm:p-8 flex flex-col gap-3">
        <ProjectsHeader />
        <ProjectSubHeader />
        <AllProjectsSection />
      </div>
    );
  }
};
export default AllProjects;
