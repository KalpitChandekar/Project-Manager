'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Edit, Trash2, RotateCcw } from 'lucide-react';
import { Task, Project } from '@/types';
import { useProject } from '@/contexts/ProjectContext';
import { getIconComponent } from '@/utils/iconUtils';

interface TaskCardProps {
  task: Task;
  project: Project;
  onEdit: (task: Task) => void;
}

const statusConfig = {
  'todo': { label: 'To Do', color: 'bg-gray-100 text-gray-800', badgeVariant: 'secondary' as const },
  'in-progress': { label: 'In Progress', color: 'bg-blue-100 text-blue-800', badgeVariant: 'default' as const },
  'done': { label: 'Done', color: 'bg-green-100 text-green-800', badgeVariant: 'default' as const },
};

const priorityConfig = {
  'low': { label: 'Low', color: 'text-green-600' },
  'medium': { label: 'Medium', color: 'text-yellow-600' },
  'high': { label: 'High', color: 'text-red-600' },
};

export function TaskCard({ task, project, onEdit }: TaskCardProps) {
  const { updateTask, deleteTask } = useProject();
  const TaskIcon = task.icon ? getIconComponent(task.icon) : null;
  const ProjectIcon = getIconComponent(project.icon);

  const handleStatusChange = (checked: boolean) => {
    if (task.status === 'done' && !checked) {
      updateTask(task.id, { status: 'todo' });
    } else if (task.status !== 'done' && checked) {
      updateTask(task.id, { status: 'done' });
    }
  };

  const handleStatusToggle = () => {
    const statusFlow = { 'todo': 'in-progress', 'in-progress': 'done', 'done': 'todo' };
    updateTask(task.id, { status: statusFlow[task.status] as Task['status'] });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  const statusStyle = statusConfig[task.status];
  const priorityStyle = task.priority ? priorityConfig[task.priority] : null;

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <Checkbox
              checked={task.status === 'done'}
              onCheckedChange={handleStatusChange}
              className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              {TaskIcon && (
                <div className="w-5 h-5 text-gray-600">
                  <TaskIcon className="w-full h-full" />
                </div>
              )}
              <h3 className={`font-medium ${task.status === 'done' ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {task.name}
              </h3>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <ProjectIcon className="w-3 h-3" />
                {project.name}
              </div>
              {priorityStyle && (
                <Badge variant="outline" className={`text-xs ${priorityStyle.color}`}>
                  {priorityStyle.label}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <Badge className={`${statusStyle.color} text-xs`} variant={statusStyle.badgeVariant}>
                {statusStyle.label}
              </Badge>
              
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleStatusToggle}
                  className="h-7 w-7 p-0 hover:bg-blue-50"
                  title="Change status"
                >
                  <RotateCcw className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(task)}
                  className="h-7 w-7 p-0 hover:bg-gray-50"
                  title="Edit task"
                >
                  <Edit className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDelete}
                  className="h-7 w-7 p-0 hover:bg-red-50 hover:text-red-600"
                  title="Delete task"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}