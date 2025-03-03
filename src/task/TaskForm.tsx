import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { Task, TaskPriority, Status } from "../vite-env";
import { useTasks } from "./useTasks";

interface TaskFormProps {
    open: boolean;
    onClose: (open: boolean) => void;
    initialValues?: Task | null;
}

export const TaskForm = ({ open, onClose, initialValues }: TaskFormProps) => {
    const { createTaskMutation, updateTaskMutation } = useTasks();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const task = Object.fromEntries(new FormData(form)) as Record<string, string>;

        const now = new Date();

        if (initialValues) {
            updateTaskMutation.mutate({
                ...initialValues,
                ...task,
                updatedAt: now,
            });
        } else {
            createTaskMutation.mutate({
                title: task.title,
                description: task.description,
                status: task.status as Status,
                priority: task.priority as TaskPriority,
                createdAt: now,
                updatedAt: now,
            });
        }

        onClose(false);
    };

    return (
        <Dialog open={open} onClose={() => onClose(false)} fullWidth maxWidth="sm">
            <DialogTitle>{initialValues ? "Editar Tarea" : "Nueva Tarea"}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                    <TextField
                        name="title"
                        label="Título"
                        defaultValue={initialValues?.title || ""}
                        fullWidth
                        required
                    />
                    <TextField
                        name="description"
                        label="Descripción"
                        defaultValue={initialValues?.description || ""}
                        fullWidth
                        multiline
                        rows={3}
                        required
                    />
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select name="status" defaultValue={initialValues?.status || "todo"}>
                            <MenuItem value="todo">Todo</MenuItem>
                            <MenuItem value="on progress">In Progress</MenuItem>
                            <MenuItem value="in review">In Review</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Priority</InputLabel>
                        <Select name="priority" defaultValue={initialValues?.priority || "low"}>
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => onClose(false)} color="error">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" variant="contained">
                        {initialValues ? "Update" : "Save"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};