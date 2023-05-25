import { Button, Container, Grid, Typography } from "@mui/material"

export const Header = () => {
  return (
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
  )
}
