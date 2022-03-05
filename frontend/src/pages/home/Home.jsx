import "./home.css";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import BlogList from "../blog/BlogList";
import { Grid } from "@mui/material";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,

}));


export default function Home() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft:"15rem" }}>
      <DrawerHeader />
      <div className="home " >
        <div className="type mt-10">

          <Link to="" className="typeItem font bg-gray-100 hover:shadow-2xl p-28 m-6" >
            <h1>Download Your Resume</h1>
          </Link>

          <Link to="" className="typeItem font bg-gray-100 hover:shadow-xl p-28 m-6" >
            <p>Go to your Portfolio</p>
          </Link>
        </div>
        {/* <Grid container spacing={2}>

          <Grid item md={6}> */}
            <div className=" bg-gray-300 hover:shadow-xl p-28 m-6 ">
              <BlogList />

            </div>
          {/* </Grid>
          <Grid item md={6}></Grid>
        </Grid> */}


      </div>
    </Box>
  );
}
