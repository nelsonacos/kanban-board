import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useTaskStore } from "./useTaskStore";
import { Task } from '../vite-env';
import { fetchData } from '../services/fetchData';

export const useTasks = () => {
    const queryClient = useQueryClient();
    const { setTaskToEdit, setOpen } = useTaskStore();

    const createTaskMutation = useMutation({
        mutationFn: (newTask: Omit<Task, 'id'>) =>
            fetchData('http://localhost:3000/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    const updateTaskMutation = useMutation({
        mutationFn: (updatedTask: Task) =>
            fetchData(`http://localhost:3000/tasks/${updatedTask.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTask),
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });

    const deleteTaskMutation = useMutation({
        mutationFn: (taskId: string) =>
            fetchData(`http://localhost:3000/tasks/${taskId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            }),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ['tasks']})
            }
    })

    const handleOpenEdit = (task: Task) => {
        setTaskToEdit(task);
        setOpen(true);
    };

    const handleOpenCreate = () => {
        setTaskToEdit(null);
        setOpen(true);
    };

    return {
        handleOpenCreate,
        handleOpenEdit,
        createTaskMutation,
        updateTaskMutation,
        deleteTaskMutation
    };
};