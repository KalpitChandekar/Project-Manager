export interface Project {
  id: string;
  name: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
  taskCount?: number;
  completedTasks?: number;
}

export interface Task {
  id: string;
  name: string;
  status: 'todo' | 'in-progress' | 'done';
  icon?: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
  priority?: 'low' | 'medium' | 'high';
}

export interface ProjectContextType {
  projects: Project[];
  tasks: Task[];
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  getProjectTasks: (projectId: string) => Task[];
}