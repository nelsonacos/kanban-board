/// <reference types="vite/client" />

export type Status = 'todo' | 'on progress' | 'in review' | 'completed';

export type TaskStatus = {
    id: string,
    status: Status 
}
export type TaskPriority = 'low' | 'medium' | 'high';

export type Tasks = Task[];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: TaskPriority;
  createdAt: Date;
  updatedAt: Date;
}