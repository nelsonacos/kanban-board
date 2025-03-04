import { TaskStatus, Tasks, Task } from '../vite-env';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../services/fetchData';
import { TaskItem } from './';
import { Grid2, Paper, Typography, Box } from '@mui/material';

export const Column = ({ status }: { status: TaskStatus }) => {
    const { data: tasks } = useQuery<Tasks>({
        queryKey: ['tasks'],
        queryFn: async () => await fetchData('http://localhost:3000/tasks')
    });

    const filteredTasks = tasks ? tasks.filter((task: Task) => task.status === status.status) : [];

    return (
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
                elevation={3}
                sx={{
                    backgroundColor: '#bbdefb',
                    padding: 0.5,
                    textAlign: 'left',
                    fontWeight: 'bold',
                    mb: 1.5,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2
                }}
            >
                <Typography variant="h6" sx={{ textTransform: 'capitalize', ml: 1.8 }}>
                    {status.status}
                </Typography>
            </Paper>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </Box>
        </Grid2>
    );
};