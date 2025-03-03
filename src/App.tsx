import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';
import { Board } from './task'
import './App.css'

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ width: '80%', margin: '100px auto' }}>
          <Board />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App