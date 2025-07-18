import { v4 as uuidv4 } from "uuid";
import { Project } from "../Data/AllProjects";
import { IconData } from "../types/AppType";
import { FormData } from "../Components/Windows/ProjectWindow";

export function addNewProject(
  data: FormData,
  allProjects: Project[],
  setAllProjects: React.Dispatch<React.SetStateAction<Project[]>>,
  setOpenProjectWindow: React.Dispatch<React.SetStateAction<boolean>>,
  selectedIcon: IconData | null,
  reset: () => void
) {
  try {
    const newProject: Project = {
      id: uuidv4(),
      title: data.projectName,
      icon: selectedIcon?.name || "LocalLibrary",
      tasks: [],
      clerkUserId: "123",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setAllProjects([...allProjects, newProject]);
    setOpenProjectWindow(false);
    reset();
  } catch (error) {
    console.log(error);
  }
}

export function deleteProject(
  selectedProject: Project | null,
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>,
  allProjects: Project[],
  setAllProjects: React.Dispatch<React.SetStateAction<Project[]>>,
  setOpenConfirmationWindow: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (selectedProject) {
    const updatedProjects = allProjects.filter(
      (project) => project.id !== selectedProject.id
    );
    setAllProjects(updatedProjects);
    setSelectedProject(null);
    setOpenConfirmationWindow(false);
  }
}
