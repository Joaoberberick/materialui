import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coisas em React
          </Typography>
          <Box sx={{display: "flex", marginRight: "1em"}}>
          <Link to="/todo"><Typography variant='h6'>Todo</Typography></Link>
          </Box>
          <Box>
          <Link to="/album"><Typography variant='h6'>Photo Album</Typography></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}