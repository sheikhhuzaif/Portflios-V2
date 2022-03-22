import React, { useState } from "react";
import { Grid, Box, Paper } from "@mui/material";
import TextField from '@mui/material/TextField'
import { Button } from "@mui/material";

// ADDress DETAILS STEP
const Step2 = ({ handleNext,
  handlePrev, }) => {

  const [address, setAddress] = useState([
    { street: '', city: '', state: '', pincode: '', country: '' },
  ]);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const newAddress = address.map(i => {
      i[event.target.name] = event.target.value
      return i;
    })
    setAddress(newAddress);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const temp = validate();
    setErrors(temp);
    if (Object.keys(temp).length === 0) {
      handleNext();
    }
    console.log(errors);
  };

  function handle(e) {
    handleSubmit(e);
  }

  const validate = () => {
    const errors = {};

    if (!address[0].street) {
      errors.street = "Street address is required!";
    }
    if (!address[0].city) {
      errors.city = "City is required!";
    }
    if (!address[0].state) {
      errors.state = "State is required!";
    } if (!address[0].pincode) {
      errors.pincode = "Pincode is required!";
    }
    if (!address[0].country) {
      errors.country = "Country is required!";
    }
    return errors;
  };

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        <TextField fullWidth
          name="street"
          label="Street Address"
          value={address.street}
          onChange={handleChange}
          multiline
          rows={3}
          error={errors.street}
          helperText={errors.street ? errors.street : ""}
        />

        <Grid container spacing={2} style={{ marginBottom: "16px", marginTop: "16px" }}>
          <Grid item md={6}>
            <TextField fullWidth
              name="city"
              label="City"
              value={address.city}
              onChange={handleChange}
              error={errors.city}
              helperText={errors.city ? errors.city : ""}
            />
          </Grid>
          <Grid item md={6}>
            <TextField fullWidth
              name="state"
              label="State"
              value={address.state}
              onChange={handleChange}
              error={errors.state}
              helperText={errors.state ? errors.state : ""}
            />
          </Grid>

        </Grid>

        <Grid container spacing={2} style={{ marginBottom: "16px", marginTop: "16px" }}>
          <Grid item md={6}>
            <TextField fullWidth
              name="pincode"
              label="Pincode"
              value={address.pincode}
              onChange={handleChange}
              error={errors.pincode}
              helperText={errors.pincode ? errors.pincode : ""}
            />
          </Grid>
          <Grid item md={6}>
            <TextField fullWidth
              name="country"
              label="Country"
              value={address.country}
              onChange={handleChange}
              error={errors.country}
              helperText={errors.country ? errors.country : ""}
            />
          </Grid>
        </Grid>

        <Grid container component={Box} justifyContent='flex-end' mt={2} p={2}>
          <Box ml={2}>
            <Button
              variant="outlined"
              onClick={handlePrev}
              color="primary">
              Back
            </Button>
          </Box>
          <Box ml={2}>
            <Button
              variant="outlined"
              onClick={handle}
              color="primary">
              Next
            </Button>
          </Box>
        </Grid>
      </Paper>
    </form>
  );
};

export default Step2;
