import "./home.css";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import BlogList from "../blog/BlogList";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import { useQuery, gql } from "@apollo/client";
import resume from "..\\..\\images\\resume.jpg"
import portfolio from "..\\..\\images\\portfolio.png"


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

  const [progress, setProgress] = useState();

  const GET_USERNAME = gql`
  query getUsername{
      userData{
          username
  }
  }
  `

const { data: userData } = useQuery(GET_USERNAME);
const userData1 = userData && userData.userData;
const username = userData1 && userData1.username;

  const GET_PROFILE_COMPLETION = gql`
  query getProfileCompletion{
    profileCompletion
  }
  `
  const { loading, error, data } = useQuery(GET_PROFILE_COMPLETION);

  console.log(data && data.profileCompletion);

  React.useEffect(() => {
    const profileCompletion = data && data.profileCompletion;
    setProgress(profileCompletion);
  }, [data]);




  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <div className="home " >
        <div className="flex mt-10">

          <Link to={{ pathname: `/resume`}} target="_blank" className="res typeItem text p-44 m-6  relative border-2 rounded-md">
            <div className="a absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${resume})` }}></div>
            <div className="b opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">Download Your Resume</div>
          </Link>

          <Link to={{ pathname: `/view/${username}` }} target="_blank" className="port typeItem text p-44 m-6  relative rounded-md">
            <div className="c absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${portfolio})` }}></div>
            <div className="d opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">Go to your Portfolio</div>
          </Link>

          {/* <Link to="" className="res typeItem text hover:shadow-xl p-28 m-6  " >
            <h1 className="transboxRes text-black">Download Your Resume</h1>
          </Link>

          <Link to="" className="typeItem text hover:shadow-xl p-28 m-6  port" >
            <p className="transboxPort text-black">Go to your Portfolio</p>
          </Link> */}
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
