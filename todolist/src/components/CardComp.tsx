import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const CardComp = () => {
  return (
    <Grid item xs={10} sm={6} md={4}>
        <Card style={{position: "relative", paddingTop: "150px"}}>
            <CardMedia image="https://source.unsplash.com/featured" title="titulo" style={{position: "absolute", top: 0, right: 0, height: "100%", width: "100%"}} />
            <CardContent style={{position: "relative", backgroundColor: "translucid"}}>
            <Typography gutterBottom variant="h4" color={"white"}>
                Titulo
            </Typography>
            <Typography variant="body2" component="h6" color={"white"}>
                algo sobre a foto em cima que vai aumentar o cartao um pouco mais
            </Typography>
            {/* <CardActions style={{position: "relative"}}>
            <Button size="small" color="primary">Ver</Button>
            <Button size="small" color="inherit" variant="outlined">Editar</Button>
            </CardActions> */}
            </CardContent>
        </Card>
    </Grid>
  )
}
