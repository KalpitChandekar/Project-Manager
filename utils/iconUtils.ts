import { Folder, FolderOpen, Briefcase, Target, Calendar, Users, Code, Palette, Lightbulb, Settings, Heart, Star, Zap, Globe, Camera, Music, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
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
  Music,
};

export function getIconComponent(iconName: string): LucideIcon {
  return iconMap[iconName] || Folder;
}
