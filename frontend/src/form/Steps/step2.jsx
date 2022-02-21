
import React, { useState } from "react";
import { Box, Grid, MenuItem, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import TextField from '@mui/material/TextField'
import { Select } from "@mui/material";

// ADDress DETAILS STEP
const Step2 = ({ handleNext,
  handlePrev, }) => {

  const [personal, setPersonal] = useState([
    { fname: '', lname: '', gender: '', phone: '', email: '', profession: '' },
  ]);
  const handleChange = (event) => {
    const newPersonal = personal.map(i => {
      i[event.target.name] = event.target.value
      return i;
    })
    setPersonal(newPersonal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  function handle(e) {
    handleSubmit(e);
    handleNext();
  }


  return (
    <form className="formHead"  onSubmit={handleSubmit}>
      <Paper className="steps">
      <Box mt={2} mb={2}>
        {renderText({
          label: "Address",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <TextField fullWidth
        id="outlined-multiline-static"
        label="Street Address"
        multiline
        rows={3}
      />

      <Grid container spacing={2} style={{ marginBottom: "16px" }, { marginTop: "16px" }}>
        <Grid item md={6}>
          <TextField fullWidth
            name="city"
            label="City"
            value={personal.fname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth
            name="state"
            label="State"
            value={personal.lname}
            onChange={handleChange}
          />
        </Grid>

      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "16px" }, { marginTop: "16px" }}>
        <Grid item md={6}>
          <TextField fullWidth
            name="pincode"
            label="Pincode"
            value={personal.fname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth
            name="country"
            label="Country"
            value={personal.lname}
            onChange={handleChange}
          />
        </Grid>

      </Grid>



      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "Next", onClick: handle })}
        </Box>
      </Grid>
    </Paper>
    </form>
  );
};

export default Step2;
