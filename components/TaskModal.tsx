'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Task } from '@/types';
import { useProject } from '@/contexts/ProjectContext';
import { IconPicker } from './IconPicker';
import { getIconComponent } from '@/utils/iconUtils';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: { name: string; status: Task['status']; icon?: string; projectId: string; priority?: Task['priority'] }) => void;
  task?: Task | null;
  mode: 'create' | 'edit';
  defaultProjectId?: string;
  isLoading?: boolean;
}

export function TaskModal({ isOpen, onClose, onSave, task, mode, defaultProjectId, isLoading = false }: TaskModalProps) {
  const { projects } = useProject();
  const [name, setName] = useState('');
  const [status, setStatus] = useState<Task['status']>('todo');
  const [icon, setIcon] = useState<string>('');
  const [projectId, setProjectId] = useState('');
  const [priority, setPriority] = useState<Task['priority']>('medium');
  const [showIconPicker, setShowIconPicker] = useState(false);

  useEffect(() => {
    if (task && mode === 'edit') {
      setName(task.name);
      setStatus(task.status);
      setIcon(task.icon || '');
      setProjectId(task.projectId);
      setPriority(task.priority || 'medium');
    } else {
      setName('');
      setStatus('todo');
      setIcon('');
      setProjectId(defaultProjectId || '');
      setPriority('medium');
    }
  }, [task, mode, isOpen, defaultProjectId]);

  const handleSave = () => {
    if (!name.trim() || !projectId || isLoading) return;
    
    onSave({
      name: name.trim(),
      status,
      icon: icon || undefined,
      projectId,
      priority,
    });
  };

  const handleClose = () => {
    if (isLoading) return;
    setName('');
    setStatus('todo');
    setIcon('');
    setProjectId('');
    setPriority('medium');
    onClose();
  };

  const IconComponent = icon ? getIconComponent(icon) : null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {mode === 'create' ? 'Create New Task' : 'Edit Task'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="taskName">Task Name</Label>
              <Input
                id="taskName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter task name"
                className="w-full"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label>Project</Label>
              <Select value={projectId} onValueChange={setProjectId} disabled={isLoading}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((project) => {
                    const ProjectIcon = getIconComponent(project.icon);
                    const projectIdValue = project.id || project._id || '';
                    return (
                      <SelectItem key={projectIdValue} value={projectIdValue}>
                        <div className="flex items-center gap-2">
                          <ProjectIcon className="w-4 h-4" />
                          {project.name}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={status} onValueChange={(value) => setStatus(value as Task['status'])} disabled={isLoading}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Priority</Label>
              <Select value={priority} onValueChange={(value) => setPriority(value as Task['priority'])} disabled={isLoading}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Task Icon (Optional)</Label>
              <Button
                variant="outline"
                onClick={() => setShowIconPicker(true)}
                className="w-full justify-start gap-2 h-12"
                disabled={isLoading}
              >
                {IconComponent ? (
                  <>
                    <IconComponent className="w-5 h-5" />
                    Click to change icon
                  </>
                ) : (
                  <>
                    <div className="w-5 h-5 border-2 border-dashed border-gray-300 rounded" />
                    Click to add icon
                  </>
                )}
              </Button>
              {icon && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIcon('')}
                  className="text-xs text-gray-500"
                  disabled={isLoading}
                >
                  Remove icon
                </Button>
              )}
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={handleClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!name.trim() || !projectId || isLoading}>
              {isLoading ? 'Saving...' : mode === 'create' ? 'Create Task' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <IconPicker
        isOpen={showIconPicker}
        onClose={() => setShowIconPicker(false)}
        onSelectIcon={setIcon}
        selectedIcon={icon}
      />
    </>
  );
}
