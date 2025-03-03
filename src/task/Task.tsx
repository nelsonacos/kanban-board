import { Card, CardContent, Typography, IconButton, Chip, Box, Divider } from '@mui/material';
import { Edit, Visibility, Delete } from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useTasks } from '.'
import { Task } from '../vite-env';

export const TaskItem = ({ task }: { task: Task }) => {
    const priorityColors: Record<Task["priority"], "error" | "success" | "warning"> = {
        low: "success",
        medium: "warning",
        high: "error"
    };

    const formattedDate = formatDistanceToNow(new Date(task.updatedAt), { addSuffix: true, locale: enUS });
    const { handleOpenEdit, deleteTaskMutation } = useTasks()

    return (
        <Card variant="outlined" sx={{ mb: 1, p: 0 }}>
            <Box sx={{ p: 0.5, backgroundColor: '#fafafa', textAlign: 'right' }}>
                <Typography sx={{ mr: 1.8 }} variant="caption" color="text.secondary">
                    {formattedDate}
                </Typography>
            </Box>

            <CardContent sx={{ pt: 3, pb: 3 }}>
                <Chip
                    label={task.priority.toUpperCase()}
                    color={priorityColors[task.priority]}
                    size="small"
                    sx={{ mb: 1 }}
                />

                <Typography variant="h6" gutterBottom>
                    {task.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {task.description}
                </Typography>
            </CardContent>

            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 0.5, backgroundColor: '#fafafa' }}>
                <IconButton disabled sx={{ m: -0.4 }} color="primary">
                    <Visibility />
                </IconButton>
                <IconButton onClick={() => { handleOpenEdit(task) }} sx={{ m: -0.4 }} color="warning">
                    <Edit />
                </IconButton>
                <IconButton onClick={() => { deleteTaskMutation.mutate(task.id) }} sx={{ m: -0.4 }} color="error">
                    <Delete />
                </IconButton>
            </Box>
        </Card>
    );
};