import { Button, Container, Grid, Typography } from "@mui/material"
import BasicModal from "./BasicModal"

export const Header = () => {
  return (
    <Container maxWidth="sm">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
        <Typography variant="h5" align="center" color="textSecondary">
            paragrafo longo so pra ocupar espaço mesmo e ver como ficar a quebra de linha com um pouco mais de texto
        </Typography>
        <div>
            <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <BasicModal />
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary">
                nada tambem
                </Button>
            </Grid> 
            </Grid>
        </div>   
    </Container>
  )
}
