import {Container, CssBaseline, Grid, ThemeProvider} from "@mui/material"
// import Grid from "@mui/material/Unstable_Grid2"
import theme from "./styles";
import { CardComp } from "./components/CardComp";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";

function App() {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        <div>
          <Header />
          <Container sx={{padding: "30px 0"}} maxWidth="lg">
            <Grid container spacing={4}>
              {cards.map(() => (
                <CardComp />
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      </ThemeProvider>
    </>
  )
}


export default App