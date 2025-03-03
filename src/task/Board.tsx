import { Grid2 } from '@mui/material';
import { useQuery } from '@tanstack/react-query'
import { fecthData } from '../services/fetchData'
import { TaskStatus } from '../vite-env'
import { Column } from '.'

export const Board = () => {
    const { isLoading, isError, data: status } = useQuery({
        queryKey: ['status'],
        queryFn: async () => await fecthData('http://localhost:3000/status')
    })
    if (isLoading) return <div>loading...</div>
    if (isError) return <div>Oops OCURRIO UN ERROR</div>
    return (
        <Grid2 container spacing={3}>
            {status && status.map((taskStatus: TaskStatus) => (
                <Column key={taskStatus.id} status={taskStatus} />
            ))}
        </Grid2>
    )
}