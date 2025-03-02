import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useQuery } from '@tanstack/react-query'
import { fecthData } from './services/fetchData'
import { Tasks } from './vite-env'
import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  const { isLoading, isError, error, data: tasks } = useQuery<Tasks>({
    queryKey: ['tasks'],
    queryFn: async () => fecthData('http://localhost:3000/tasks')
  })

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>{`Oops ocurrio un error: ${error.message}`}</div>
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <pre>{JSON.stringify(tasks, null, 2)}</pre>
      </ThemeProvider>
    </>
  )
}

export default App