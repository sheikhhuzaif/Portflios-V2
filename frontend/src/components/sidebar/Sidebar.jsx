import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArticleIcon from '@mui/icons-material/Article';
import DvrIcon from '@mui/icons-material/Dvr';
import { Link } from "react-router-dom";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import EditIcon from '@mui/icons-material/Edit';
import PasswordIcon from '@mui/icons-material/Password';
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  let navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(false);

  const handleLogout = () => {
    navigate('/logout')
    window.location.reload();
  };

  const handleClick = () => {
    setOpen1(!open1);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ backgroundColor: "#3d91f1" }}>
        <Toolbar >
          <IconButton
            style={{ color: "black" }}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            style={{ color: "black" }}
            color="inherit"
            onClick={handleDrawerClose}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(!open && { display: 'none' }),
            }}
          >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          {/* <Typography  variant="h5" noWrap component="div" style={{ color: "white" }}> */}
         <Typography class="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" noWrap component="div" >
            PRTFOLIOS
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>

        </DrawerHeader>
        <Divider />
        <List >
          {/* HOME */}
          <Link to="/dashboard" className="link">
            <ListItem button key="Home" onClick={() => {
              navigate('/dashboard')
            }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          {/* PORTFOLIO */}
          {/* <Link to="/dashboard/portfolio" className="link"> */}
          <ListItem button key="Portfolio" onClick={() => {
            navigate('/dashboard/portfolio')
          }}>
            <ListItemIcon>
              <DvrIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
          {/* </Link> */}

          {/* RESUME */}
          {/* <Link to="/dashboard/resume" className="link"> */}
          <ListItem button key="Resume" onClick={() => {
            navigate('/dashboard/resume')
          }}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
          {/* </Link> */}
        </List>
        <Divider />

        <List>

          {/* Profile */}

          <ListItem button onClick={handleClick} key="Profile">
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* <Link to="/dashboard/edit" className="link"> */}
              <ListItem button key="edit" onClick={() => {
                navigate('/dashboard/edit')
              }} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit" />
              </ListItem>
              {/* </Link> */}
              <ListItem button key ="reset" onClick={() => {
                window.location = "http://www.portfolios.works/change-password"
              }} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <PasswordIcon />
                </ListItemIcon>
                <ListItemText primary="Reset Password" />
              </ListItem>
            </List>
          </Collapse>

          {/* Logout */}
          <ListItem button key="Logout" onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box> */}

    </Box>
  );
}