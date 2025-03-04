import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function ButtonAppBar() {

    return (

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton 
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Visualizar PDF
            </Typography>
                <a href="https://www.anoiaint.com"> <img src="logoai.png" alt="Anoia Interactiva,sccl" />
                </a>
          </Toolbar>
        </AppBar>
      </Box>

    );
  }

  export default ButtonAppBar;
  