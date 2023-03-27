import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
  Box, Drawer, CssBaseline,
  Toolbar, List, Typography, Divider,
  IconButton, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Collapse
} from "@mui/material"
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { config, IconProp } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faFaceSmile, faFrog, 
  faHatWizard, faCircle, faRainbow, faEarDeaf,
  faPallet, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'


import type { AppProps } from 'next/app'
import { Button, Container } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openBrincos, setOpenBrincos] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return <Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <AppBar elevation={0} sx={{backdropFilter:"blur(20px)", background: "#ffb8e780"}} position="fixed" open={open}>
    <Container maxWidth="xl">
          <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <FontAwesomeIcon icon={faBars} style={{color: "f79cd9"}} />
        </IconButton>
            <LocalFloristIcon style={{color: "f79cd9"}} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#f79cd9',
                textDecoration: 'none',
              }}
            >
              Panlê Core
            </Typography>
            <LocalFloristIcon style={{color: "#f79cd9"}} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#f79cd9',
                textDecoration: 'none',
              }}
            >
              Panlê Core
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {[Array(3).keys()].map((item) => (
                <Button
                  key={Number(item)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
            <IconButton
            edge="start"
            >
              <FontAwesomeIcon icon={faCartShopping} style={{color: "#f79cd9"}} />
            </IconButton>
            </Box>
          </Toolbar>
    </Container>
  </AppBar>
  <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        background: "#fdffc2"
      },
    }}
    variant="persistent"
    anchor="left"
    open={open}
  >
    <DrawerHeader style={{background: "#ffb8e780"}}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' 
        ? <ChevronLeftIcon style={{color: "#f79cd9"}} /> : <ChevronRightIcon style={{color: "#f79cd9"}} />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
    <ListItem onClick={() => setOpenBrincos(!openBrincos)} disablePadding>
      <ListItemButton>
        <ListItemText>
            <h3 style={{color: "#f79cd9"}}>Brincos</h3>
        </ListItemText>
      {openBrincos ? 
        <ExpandLess style={{color: "#f79cd9"}} /> : 
        <ExpandMore style={{color: "#f79cd9"}} />}
      </ListItemButton>
    </ListItem>
      <Collapse in={openBrincos} timeout="auto" unmountOnExit>
        <List>
          {[
            ["Comidinhas", faPizzaSlice], ["Personagens", faFaceSmile],
            ["Animais", faFrog], ["Elementais", faHatWizard],
            ["Argolas", faCircle], ["Coloridos", faRainbow],
            ["Brincos Pequenos", faEarDeaf], ["Outros", faPallet],
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <FontAwesomeIcon size='2x' icon={item[1] as IconProp} style={{color: "#ffea08"}} />
                </ListItemIcon>
                <ListItemText>
                  <h3 style={{color: "#f79cd9"}}>{item[0] as String}</h3>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  </Drawer>
  <Main style={{background: "#fdffc2",}} open={open}>
    <DrawerHeader />
    <Typography paragraph></Typography>
    <Component {...pageProps} />
  </Main>
</Box>
}
