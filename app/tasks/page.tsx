'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Filter } from 'lucide-react';
import { useProject } from '@/contexts/ProjectContext';
import { TaskCard } from '@/components/TaskCard';
import { TaskModal } from '@/components/TaskModal';
import { Task } from '@/types';
import { getIconComponent } from '@/utils/iconUtils';
import { toast } from 'sonner';

export default function TasksPage() {
  const { projects, tasks, addTask, updateTask } = useProject();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTask = () => {
    setEditingTask(null);
    setModalMode('create');
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleSaveTask = async (taskData: { name: string; status: Task['status']; icon?: string; projectId: string; priority?: Task['priority'] }) => {
    setIsLoading(true);
    try {
      if (modalMode === 'create') {
        await addTask(taskData);
        toast.success('Task created successfully!');
      } else if (editingTask) {
        await updateTask(editingTask.id || editingTask._id || '', taskData);
        toast.success('Task updated successfully!');
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving task:', error);
      toast.error('Failed to save task. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesProject = selectedProject === 'all' || task.projectId === selectedProject;
      const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
      const matchesPriority = selectedPriority === 'all' || task.priority === selectedPriority;
      
      return matchesSearch && matchesProject && matchesStatus && matchesPriority;
    });
  }, [tasks, searchQuery, selectedProject, selectedStatus, selectedPriority]);

  const tasksByStatus = useMemo(() => {
    const ongoing = filteredTasks.filter(task => task.status !== 'done');
    const completed = filteredTasks.filter(task => task.status === 'done');
    return { ongoing, completed };
  }, [filteredTasks]);

  const taskStats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.status === 'done').length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    return { total, completed, ongoing: total - completed, completionRate };
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-50 lg:pl-64">
      <div className="p-4 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Tasks</h1>
            <p className="text-gray-600">Manage your tasks across all projects</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button onClick={handleCreateTask} className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-900">{taskStats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ongoing</p>
                <p className="text-2xl font-bold text-orange-600">{taskStats.ongoing}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Filter className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{taskStats.completed}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Plus className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold text-purple-600">{taskStats.completionRate}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedProject} onValueChange={setSelectedProject}>
              <SelectTrigger>
                <SelectValue placeholder="All Projects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                {projects.map((project) => {
                  const ProjectIcon = getIconComponent(project.icon);
                  const projectId = project.id || project._id;
                  return (
                    <SelectItem key={projectId} value={projectId}>
                      <div className="flex items-center gap-2">
                        <ProjectIcon className="w-4 h-4" />
                        {project.name}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedPriority} onValueChange={setSelectedPriority}>
              <SelectTrigger>
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Task Tabs */}
        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="ongoing" className="flex items-center gap-2">
              <span>Ongoing Tasks</span>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                {tasksByStatus.ongoing.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <span>Completed Tasks</span>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                {tasksByStatus.completed.length}
              </Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ongoing" className="space-y-4">
            {tasksByStatus.ongoing.length > 0 ? (
              <div className="space-y-3">
                {tasksByStatus.ongoing.map((task) => {
                  const project = projects.find(p => (p.id || p._id) === task.projectId);
                  if (!project) return null;
                  
                  return (
                    <TaskCard
                      key={task.id || task._id}
                      task={task}
                      project={project}
                      onEdit={handleEditTask}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No ongoing tasks</h3>
                <p className="text-gray-600 mb-6">
                  All tasks are completed or create a new task to get started
                </p>
                <Button onClick={handleCreateTask} className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Task
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-4">
            {tasksByStatus.completed.length > 0 ? (
              <div className="space-y-3">
                {tasksByStatus.completed.map((task) => {
                  const project = projects.find(p => (p.id || p._id) === task.projectId);
                  if (!project) return null;
                  
                  return (
                    <TaskCard
                      key={task.id || task._id}
                      task={task}
                      project={project}
                      onEdit={handleEditTask}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No completed tasks</h3>
                <p className="text-gray-600">Complete some tasks to see them here</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Task Modal */}
        <TaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveTask}
          task={editingTask}
          mode={modalMode}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
