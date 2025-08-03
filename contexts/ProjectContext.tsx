'use client';

import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { Project, Task, ProjectContextType } from '@/types';
import { projectAPI, taskAPI } from '@/lib/api';

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

type ProjectAction =
  | { type: 'SET_PROJECTS'; payload: Project[] }
  | { type: 'SET_TASKS'; payload: Task[] }
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'UPDATE_PROJECT'; payload: { id: string; updates: Partial<Project> } }
  | { type: 'DELETE_PROJECT'; payload: string }
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean };

interface ProjectState {
  projects: Project[];
  tasks: Task[];
  loading: boolean;
}

const initialState: ProjectState = {
  projects: [],
  tasks: [],
  loading: false,
};

function projectReducer(state: ProjectState, action: ProjectAction): ProjectState {
  switch (action.type) {
    case 'SET_PROJECTS':
      return {
        ...state,
        projects: action.payload,
      };
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id
            ? { ...project, ...action.payload.updates }
            : project
        ),
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
        tasks: state.tasks.filter(task => task.projectId !== action.payload),
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updates }
            : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const [initialized, setInitialized] = useState(false);

  // Load data from API on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        
        // Load projects and tasks in parallel
        const [projects, tasks] = await Promise.all([
          projectAPI.getAll(),
          taskAPI.getAll(),
        ]);
        
        dispatch({ type: 'SET_PROJECTS', payload: projects });
        dispatch({ type: 'SET_TASKS', payload: tasks });
        setInitialized(true);
      } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to empty arrays if API fails
        dispatch({ type: 'SET_PROJECTS', payload: [] });
        dispatch({ type: 'SET_TASKS', payload: [] });
        setInitialized(true);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadData();
  }, []);

  const addProject = async (projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newProject = await projectAPI.create(projectData);
      dispatch({ type: 'ADD_PROJECT', payload: newProject });
    } catch (error) {
      console.error('Error adding project:', error);
      throw error;
    }
  };

  const updateProject = async (id: string, updates: Partial<Project>) => {
    try {
      const updatedProject = await projectAPI.update(id, updates);
      dispatch({ type: 'UPDATE_PROJECT', payload: { id, updates: updatedProject } });
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await projectAPI.delete(id);
      dispatch({ type: 'DELETE_PROJECT', payload: id });
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  };

  const addTask = async (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newTask = await taskAPI.create(taskData);
      dispatch({ type: 'ADD_TASK', payload: newTask });
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  };

  const updateTask = async (id: string, updates: Partial<Task>) => {
    try {
      const updatedTask = await taskAPI.update(id, updates);
      dispatch({ type: 'UPDATE_TASK', payload: { id, updates: updatedTask } });
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await taskAPI.delete(id);
      dispatch({ type: 'DELETE_TASK', payload: id });
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  };

  const getProjectTasks = (projectId: string) => {
    return state.tasks.filter(task => task.projectId === projectId);
  };

  const value: ProjectContextType = {
    projects: state.projects,
    tasks: state.tasks,
    addProject,
    updateProject,
    deleteProject,
    addTask,
    updateTask,
    deleteTask,
    getProjectTasks,
  };

  // Show loading state while initializing
  if (!initialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading your projects...</p>
        </div>
      </div>
    );
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}
