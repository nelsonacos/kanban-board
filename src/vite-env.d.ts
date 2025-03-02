/// <reference types="vite/client" />

export type TaskStatus = 'todo' | 'onProgress' | 'inReview' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Tasks {
    tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: Date;
  updatedAt: Date;
}