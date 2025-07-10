import { v4 as uuidv4 } from "uuid";

export type Task = {
  id: string;
  title: string;
  icon: string;
  projectName: string;
  status: "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  createdAt: string;
  updatedAt: string;
};

export type Project = {
  id: string;
  clerkUserId: string;
  title: string;
  icon: string;
  createdAt: string;
  updatedAt: string;

  tasks: Task[];
};

export const projectsData: Project[] = [
  {
    id: uuidv4(),
    clerkUserId: "123",
    title: "Test Project",
    icon: "LocalLibrary",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",

    tasks: [
      {
        id: uuidv4(),
        title: "description 1",
        icon: "Movie",
        projectName: "Project",
        status: "In Progress",
        priority: "Low",
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
      },
      {
        id: uuidv4(),
        title: "description 2",
        icon: "Movie",
        projectName: "Project",
        status: "In Progress",
        priority: "Low",
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
      },
      {
        id: uuidv4(),
        title: "description 3",
        icon: "Movie",
        projectName: "Project",
        status: "In Progress",
        priority: "Low",
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
      },
      {
        id: uuidv4(),
        title: "description 4",
        icon: "Movie",
        projectName: "Project",
        status: "In Progress",
        priority: "Low",
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
      },
    ],
  },
];
