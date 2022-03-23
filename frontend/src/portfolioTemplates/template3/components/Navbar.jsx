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
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import MemoryIcon from '@mui/icons-material/Memory';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
        <Toolbar className='justify-center items-center'>
          <PersonIcon style={{ width: "10vw", height: "10vh" }} />
        </Toolbar>
        <Toolbar className='justify-center items-center w-full text-3xl font-extrabold '>
          <a href="#about" className=" transform hover:scale-125">
            Mihir Dadwal
          </a>
        </Toolbar>
        <Toolbar className='justify-left items-center w-full font-semibold'>
          <ArrowForwardIosIcon />
          <p className='pl-2'>I'm a professional koder</p>
        </Toolbar>
        {/* <Toolbar/> */}
        {/* <div className='justify-center items-center w-full'>
          Mihir

        </div> */}
        <Divider />

        <List>
          <a href="#about2"  >
            <ListItem button key="about" className='transform hover:scale-105'>
              <ListItemIcon>
                <InfoIcon/>
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </a>
          <a href="#resume" >
            <ListItem button key="resume" className='transform hover:scale-105'>
              <ListItemIcon>
                <FilePresentIcon/>
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItem>
          </a>
          <a href="#skills" >
            <ListItem button key="skills" className='transform hover:scale-105'>
              <ListItemIcon>
                <MemoryIcon/>
              </ListItemIcon>
              <ListItemText primary="Skills" />
            </ListItem>
          </a>

          <a href="#education" >
            <ListItem button key="education" className='transform hover:scale-105'>
              <ListItemIcon>
                <SchoolIcon/>
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItem>
          </a>
          <a href="#workExp" >
            <ListItem button key="workExp" className='transform hover:scale-105'>
              <ListItemIcon>
                <WorkIcon/>
              </ListItemIcon>
              <ListItemText primary="Work Experience" />
            </ListItem>
          </a>
        </List>
        <Divider className=''></Divider>
        <List>
          <a href="#contact">
            <ListItem button key="contact" className='transform hover:scale-105'>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>

              <ListItemText primary="Contact" />
            </ListItem>
          </a>
        </List>
      </Drawer>
    </Box>
  );
}
