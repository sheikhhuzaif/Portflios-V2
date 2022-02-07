// import "./sidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@material-ui/icons";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="sidebarWrapper">
//         <div className="sidebarMenu">
//           <h3 className="sidebarTitle">Dashboard</h3>
//           <ul className="sidebarList">
//             <Link to="/" className="link">
//             <li className="sidebarListItem active">
//               <LineStyle className="sidebarIcon" />
//               Home
//             </li>
//             {/* <li className="sidebarListItem active">
//               <LineStyle className="sidebarIcon" />
//               Templates
//             </li> */}
//             </Link>
//           </ul>
//         </div>
//         <div className="sidebarMenu">
//           <h3 className="sidebarTitle">Template</h3>
//           <ul className="sidebarList">
//             <Link to="/users" className="link">
//               <li className="sidebarListItem">
//                 <PermIdentity className="sidebarIcon" />
//                 Portfolio
//               </li>
//             </Link>
//             <Link to="/products" className="link">
//               <li className="sidebarListItem">
//                 <Storefront className="sidebarIcon" />
//                 Resume
//               </li>
//             </Link>
            

//           </ul>
//         </div>
//         <div className="sidebarMenu">
//           <h3 className="sidebarTitle">Profile</h3>
//           <ul className="sidebarList">
//             <li className="sidebarListItem">
//               <MailOutline className="sidebarIcon" />
//               Edit
//             </li>
//           </ul>
//         </div>
        
//       </div>
//     </div>
//   );
// }



import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" top="0" z-index="999" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar  position="sticky" top="0" z-index="999">
          <Typography variant="h5" noWrap component="div">
            PRTFOLIOS
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['User', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

    </Box>
  );
}
