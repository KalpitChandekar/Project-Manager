import SingleProjectCard from "./SingleProjectCard";
import { useContextApp } from "@/app/ContexApp";
import ProjectsEmptyScreen from "@/app/EmptyScreens/ProjectsEmptyScreen";
export const AllProjectsSection = () => {
  const {
    allProjectsObject: { allProjects },
  } = useContextApp();
  return (
    <>
      {allProjects.length > 0 ? (
        <ul className="overflow-auto mt-6 grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-y-4 gap-x-4">
          {allProjects.map((project) => (
            <SingleProjectCard key={project.id} project={project} />
          ))}
        </ul>
      ) : (
        <ProjectsEmptyScreen />
      )}
    </>
  );
};
