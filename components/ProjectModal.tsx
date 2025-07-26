'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Project } from '@/types';
import { IconPicker } from './IconPicker';
import { getIconComponent } from '@/utils/iconUtils';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: { name: string; icon: string }) => void;
  project?: Project | null;
  mode: 'create' | 'edit';
}

export function ProjectModal({ isOpen, onClose, onSave, project, mode }: ProjectModalProps) {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('Folder');
  const [showIconPicker, setShowIconPicker] = useState(false);

  useEffect(() => {
    if (project && mode === 'edit') {
      setName(project.name);
      setIcon(project.icon);
    } else {
      setName('');
      setIcon('Folder');
    }
  }, [project, mode, isOpen]);

  const handleSave = () => {
    if (!name.trim()) return;
    
    onSave({ name: name.trim(), icon });
    onClose();
  };

  const handleClose = () => {
    setName('');
    setIcon('Folder');
    onClose();
  };

  const IconComponent = getIconComponent(icon);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {mode === 'create' ? 'Create New Project' : 'Edit Project'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter project name"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Project Icon</Label>
              <Button
                variant="outline"
                onClick={() => setShowIconPicker(true)}
                className="w-full justify-start gap-2 h-12"
              >
                <IconComponent className="w-5 h-5" />
                Click to change icon
              </Button>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!name.trim()}>
              {mode === 'create' ? 'Create Project' : 'Save Changes'}
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