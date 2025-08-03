'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2 } from 'lucide-react';
import { Project } from '@/types';
import { useProject } from '@/contexts/ProjectContext';
import { getIconComponent } from '@/utils/iconUtils';
import { toast } from 'sonner';

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

export function ProjectCard({ project, onEdit }: ProjectCardProps) {
  const { deleteProject, getProjectTasks } = useProject();
  const [isDeleting, setIsDeleting] = useState(false);
  const IconComponent = getIconComponent(project.icon);
  const projectId = project.id || project._id || '';
  const tasks = getProjectTasks(projectId);
  const completedTasks = tasks.filter(task => task.status === 'done').length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const handleDelete = async () => {
    if (!projectId) {
      toast.error('Invalid project ID');
      return;
    }
    
    if (window.confirm('Are you sure you want to delete this project? All associated tasks will be removed.')) {
      setIsDeleting(true);
      try {
        await deleteProject(projectId);
        toast.success('Project deleted successfully!');
      } catch (error) {
        console.error('Error deleting project:', error);
        toast.error('Failed to delete project. Please try again.');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-gray-500">
              {totalTasks} {totalTasks === 1 ? 'task' : 'tasks'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <Badge variant={completionPercentage === 100 ? "default" : "secondary"}>
            {completionPercentage}%
          </Badge>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          {completedTasks} of {totalTasks} tasks completed
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(project)}
          className="flex-1 hover:bg-purple-50"
          disabled={isDeleting}
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDelete}
          className="flex-1 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200"
          disabled={isDeleting}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      </CardFooter>
    </Card>
  );
}
