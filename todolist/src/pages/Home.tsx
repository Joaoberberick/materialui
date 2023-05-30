import { Box, Container, Grid } from "@mui/material"

export const Home = () => {
  return (
    <Container sx={{padding: "30px 0"}} maxWidth="lg">
      <Grid container sx={{justifyContent: "center", alignItems: "center"}}>
        <Box sx={{alignContent: "center", justifyContent: "center"}}>
          <img src="https://mui.com/static/logo.png" alt="" />
        </Box>
      </Grid>
    </Container>
  )
}
