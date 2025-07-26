'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  Folder, 
  FolderOpen, 
  Briefcase, 
  Target, 
  Calendar, 
  Users, 
  Code, 
  Palette, 
  Lightbulb,
  Settings,
  Heart,
  Star,
  Zap,
  Globe,
  Camera,
  Music
} from 'lucide-react';

const icons = [
  { name: 'Folder', component: Folder },
  { name: 'FolderOpen', component: FolderOpen },
  { name: 'Briefcase', component: Briefcase },
  { name: 'Target', component: Target },
  { name: 'Calendar', component: Calendar },
  { name: 'Users', component: Users },
  { name: 'Code', component: Code },
  { name: 'Palette', component: Palette },
  { name: 'Lightbulb', component: Lightbulb },
  { name: 'Settings', component: Settings },
  { name: 'Heart', component: Heart },
  { name: 'Star', component: Star },
  { name: 'Zap', component: Zap },
  { name: 'Globe', component: Globe },
  { name: 'Camera', component: Camera },
  { name: 'Music', component: Music },
];

interface IconPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectIcon: (iconName: string) => void;
  selectedIcon?: string;
}

export function IconPicker({ isOpen, onClose, onSelectIcon, selectedIcon }: IconPickerProps) {
  const handleIconSelect = (iconName: string) => {
    onSelectIcon(iconName);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose an Icon</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-3 p-4">
          {icons.map(({ name, component: IconComponent }) => (
            <Button
              key={name}
              variant={selectedIcon === name ? "default" : "outline"}
              className="h-16 w-16 p-2"
              onClick={() => handleIconSelect(name)}
            >
              <IconComponent className="h-8 w-8" />
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}