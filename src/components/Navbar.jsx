import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid} from '@mui/material';
import AppIcon from '../assets/instagram.svg'

const Navbar = () => {
  return (
    <>

        <Grid item sm={12}>
                <AppBar position="static">
                  <Container maxWidth="xl">
                      <Toolbar disableGutters> {/*Toolbar is to display its children with an inline display (elements are placed next to each other),*/}
                        <img src={AppIcon} alt='InstaAutoShare' height={'60px'} width={'60px'}  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                              variant="h6"
                              noWrap
                              component="a"
                              href="/"
                              sx={{
                              mr: 2,
                              ml:2,
                              py:3,
                              display: { xs: 'none', md: 'flex' },
                              fontWeight: 700,
                              letterSpacing: '.2rem',
                              color: 'inherit',
                              textDecoration: 'none',
                              }}
                          >
                              InstaAutoShare
                          </Typography>
                      </Toolbar>
                  </Container>
                </AppBar>
          </Grid>
    </>
  )
}

export default Navbar
