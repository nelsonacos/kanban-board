import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"
import { Button } from '@mui/material'
import { useTasks, TaskForm } from './task';
import Container from '@mui/material/Container';
import { Board } from './task'
import { useTaskStore } from "./task/useTaskStore";
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  const { handleOpenCreate } = useTasks()
  const { open, setOpen, taskToEdit } = useTaskStore();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ width: '80%', margin: '100px auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '15px', height: '56px' }}>
            <h1>Kanban Board</h1>
            <Button color='primary' variant='contained' onClick={handleOpenCreate}>+ New Task</Button>
          </div>
          <Board />
        </Container>
        <TaskForm
          open={open}
          onClose={() => { setOpen(false) }}
          initialValues={taskToEdit}
        />
      </ThemeProvider >
    </>
  )
}

export default App