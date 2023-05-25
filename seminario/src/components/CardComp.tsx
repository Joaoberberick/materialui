import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const CardComp = () => {
  return (
    <Grid item xs={10} sm={6} md={4}>
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
  )
}
