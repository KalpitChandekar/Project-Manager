export interface Project {
  _id?: string;
  id?: string;
  name: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
  taskCount?: number;
  completedTasks?: number;
}

export interface Task {
  _id?: string;
  id?: string;
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
  addProject: (project: Omit<Project, 'id' | '_id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateProject: (id: string, updates: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  addTask: (task: Omit<Task, 'id' | '_id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  getProjectTasks: (projectId: string) => Task[];
}
