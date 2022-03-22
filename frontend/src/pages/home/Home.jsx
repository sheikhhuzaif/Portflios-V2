import "./home.css";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import BlogList from "../blog/BlogList";
import { Typography } from "@mui/material";
import { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import res from "..\\..\\images\\resume.jpg"

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,

}));

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" >{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
export default function Home() {
  const [progress, setProgress] = useState(69);


  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft:"15rem" }}>
      <DrawerHeader />
      <div className="home " >
        <div className="type mt-10">

          <Link to="" className="res typeItem text hover:shadow-xl p-28 m-6  " >
            <h1 className="transboxRes">Download Your Resume</h1>
          </Link>

          <Link to="" className="typeItem text hover:shadow-xl p-28 m-6 port " >
            <p className="transboxPort ">Go to your Portfolio</p>
          </Link>
        </div>

        <Box className="rad bg-gray-100 pt-20 pb-20 pl-10 pr-10 m-6 mt-10 mb-10">
          <p className="pb-3 font-extrabold text-xl">Your Profile Completed :</p>
          <LinearProgressWithLabel value={progress} />
        </Box>

        <div className="rad m-6 mt-10">
          <BlogList />
        </div>
      </div>
    </Box>
  );
}
