import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, ThemeProvider, Toolbar, Typography } from "@mui/material"
// import Grid from "@mui/material/Unstable_Grid2"
import theme from "./styles";

function App() {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
           <Typography variant="h6">Photo album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
            <Typography variant="h5" align="center" color="textSecondary">
              paragrafo longo so pra ocupar espaço mesmo tem nada pra escrever aqui sla um dois tres quartraosdf
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    ver fotos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    outra coisa
                  </Button>
                </Grid> 
              </Grid>
            </div>   
          </Container>
          <Container sx={{padding: "30px 0"}} maxWidth="lg">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={10} sm={6} md={4}>
                <Card>
                  <CardMedia image="https://source.unsplash.com/featured" title="titulo"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Titulo
                    </Typography>
                    <Typography>
                      algo sobre a foto em cima que vai aumentar o cartao um pouco mais
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">Ver</Button>
                    <Button size="small" color="primary">Editar</Button>
                   </CardActions>
                </Card>
              </Grid>
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