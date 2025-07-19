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
    title: "Portfolio Website",
    icon: "Code",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-05",
    tasks: [
      {
        id: uuidv4(),
        title: "Setup Next.js project",
        icon: "Build",
        projectName: "Portfolio Website",
        status: "Completed",
        priority: "High",
        createdAt: "2025-01-01",
        updatedAt: "2025-01-02",
      },
      {
        id: uuidv4(),
        title: "Create About page",
        icon: "Person",
        projectName: "Portfolio Website",
        status: "In Progress",
        priority: "Medium",
        createdAt: "2025-01-03",
        updatedAt: "2025-01-04",
      },
      {
        id: uuidv4(),
        title: "Implement dark mode",
        icon: "DarkMode",
        projectName: "Portfolio Website",
        status: "Pending",
        priority: "Low",
        createdAt: "2025-01-04",
        updatedAt: "2025-01-05",
      },
      {
        id: uuidv4(),
        title: "Deploy on Vercel",
        icon: "CloudUpload",
        projectName: "Portfolio Website",
        status: "Pending",
        priority: "Medium",
        createdAt: "2025-01-05",
        updatedAt: "2025-01-05",
      },
    ],
  },
  // {
  //   id: uuidv4(),
  //   clerkUserId: "123",
  //   title: "E-commerce Dashboard",
  //   icon: "ShoppingCart",
  //   createdAt: "2025-03-01",
  //   updatedAt: "2025-03-04",
  //   tasks: [
  //     {
  //       id: uuidv4(),
  //       title: "Create product cards",
  //       icon: "Style",
  //       projectName: "E-commerce Dashboard",
  //       status: "Completed",
  //       priority: "Medium",
  //       createdAt: "2025-03-01",
  //       updatedAt: "2025-03-02",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Integrate Stripe API",
  //       icon: "CreditCard",
  //       projectName: "E-commerce Dashboard",
  //       status: "In Progress",
  //       priority: "High",
  //       createdAt: "2025-03-02",
  //       updatedAt: "2025-03-03",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Build order summary page",
  //       icon: "Receipt",
  //       projectName: "E-commerce Dashboard",
  //       status: "Pending",
  //       priority: "Medium",
  //       createdAt: "2025-03-03",
  //       updatedAt: "2025-03-04",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Admin analytics",
  //       icon: "Analytics",
  //       projectName: "E-commerce Dashboard",
  //       status: "Pending",
  //       priority: "High",
  //       createdAt: "2025-03-04",
  //       updatedAt: "2025-03-04",
  //     },
  //   ],
  // },
  // {
  //   id: uuidv4(),
  //   clerkUserId: "123",
  //   title: "Chat Application",
  //   icon: "Chat",
  //   createdAt: "2025-05-01",
  //   updatedAt: "2025-05-04",
  //   tasks: [
  //     {
  //       id: uuidv4(),
  //       title: "Setup Socket.IO",
  //       icon: "Link",
  //       projectName: "Chat Application",
  //       status: "Completed",
  //       priority: "High",
  //       createdAt: "2025-05-01",
  //       updatedAt: "2025-05-02",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Add group chat feature",
  //       icon: "Groups",
  //       projectName: "Chat Application",
  //       status: "In Progress",
  //       priority: "High",
  //       createdAt: "2025-05-02",
  //       updatedAt: "2025-05-03",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Read receipts",
  //       icon: "MarkEmailRead",
  //       projectName: "Chat Application",
  //       status: "Pending",
  //       priority: "Medium",
  //       createdAt: "2025-05-03",
  //       updatedAt: "2025-05-04",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Online status indicator",
  //       icon: "Circle",
  //       projectName: "Chat Application",
  //       status: "Pending",
  //       priority: "Low",
  //       createdAt: "2025-05-04",
  //       updatedAt: "2025-05-04",
  //     },
  //   ],
  // },
  // {
  //   id: uuidv4(),
  //   clerkUserId: "123",
  //   title: "Fitness Tracker",
  //   icon: "FitnessCenter",
  //   createdAt: "2025-06-01",
  //   updatedAt: "2025-06-03",
  //   tasks: [
  //     {
  //       id: uuidv4(),
  //       title: "User login/signup",
  //       icon: "Login",
  //       projectName: "Fitness Tracker",
  //       status: "Completed",
  //       priority: "High",
  //       createdAt: "2025-06-01",
  //       updatedAt: "2025-06-01",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Daily workout planner",
  //       icon: "CalendarToday",
  //       projectName: "Fitness Tracker",
  //       status: "In Progress",
  //       priority: "Medium",
  //       createdAt: "2025-06-02",
  //       updatedAt: "2025-06-03",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Add step counter",
  //       icon: "DirectionsWalk",
  //       projectName: "Fitness Tracker",
  //       status: "Pending",
  //       priority: "Medium",
  //       createdAt: "2025-06-03",
  //       updatedAt: "2025-06-03",
  //     },
  //     {
  //       id: uuidv4(),
  //       title: "Water intake tracker",
  //       icon: "Opacity",
  //       projectName: "Fitness Tracker",
  //       status: "Pending",
  //       priority: "Low",
  //       createdAt: "2025-06-03",
  //       updatedAt: "2025-06-03",
  //     },
  //   ],
  // },
];
