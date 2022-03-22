import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
const drawerWidth = 280;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <Drawer
        style={{ backgroundColor: "#3d91f1" }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className='justify-center items-center '>
          <PersonIcon style={{ width: "20vw", height: "5vh" }} />
        </Toolbar>
        <Toolbar className='justify-center items-center w-full text-3xl font-extrabold'>
          Mihir Dadwal
        </Toolbar>
        <Toolbar className='justify-center items-center w-full font-semibold'>
          I'm a professional koder
        </Toolbar>
        {/* <Toolbar/> */}
        {/* <div className='justify-center items-center w-full'>
          Mihir

        </div> */}
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button key="contact">
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>

            <ListItemText primary="Contact" />
          </ListItem>
        </List>
       
      </Drawer>
      
    </Box>
  );
}
