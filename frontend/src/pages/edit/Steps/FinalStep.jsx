import React from "react";
import { Box, Paper } from "@material-ui/core";
import { Typography } from "@mui/material";

const FinalStep = ({ data }) => {
  return (
    <div className="formHead ">
      <Paper className="steps">
        <Box mt={2} mb={2}>
          <Typography variant="h6" color="textPrimary" align="center">
            Data Submitted Successfully. 
          </Typography>
          <Typography variant="h6" color="textPrimary" align="center">
            Now you can go and select templates for your Resume and Portfolio Website
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default FinalStep;
