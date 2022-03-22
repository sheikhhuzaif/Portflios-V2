// import React from "react";

// export default function Navbar() {
//   return (
//     <header className="bg-gray-800 md:sticky top-0 z-10 ">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="title-font font-medium text-white mb-4 md:mb-0">
//           <a href="#about" className="ml-3 text-xl">
//             Mihir Dadwal
//           </a>
//         </a>
//         <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
//           {/* <Link to="about2"  className="mr-5 hover:text-white">about</Link> */}

//           <a href="#resume" className="mr-5 hover:text-white ">
//             Resume
//           </a>
//           <a href="#skills" className="mr-5 hover:text-white">
//             Skills
//           </a>
//           <a href="#education" className="mr-5 hover:text-white">
//             Education
//           </a>
//           <a href="#workExp" className="mr-5 hover:text-white">
//             Work Experience
//           </a>
//         </nav>
//         <a
//           href="#contact"
//           className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
//           Contact me
//           {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
//         </a>
//       </div>
//     </header>
//   );
// }


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
            <ListItem button key="">
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="" />
            </ListItem>
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
