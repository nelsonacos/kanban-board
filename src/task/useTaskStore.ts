import { create } from "zustand";
import { Task } from "../vite-env";

interface TaskState {
  open: boolean;
  taskToEdit: Task | null;
  setTaskToEdit: (task: Task | null) => void;
  setOpen: (open: boolean) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  open: false,
  taskToEdit: null,
  setTaskToEdit: (task: Task | null) => set({ taskToEdit: task }),
  setOpen: (open: boolean) => set({ open }),
}));