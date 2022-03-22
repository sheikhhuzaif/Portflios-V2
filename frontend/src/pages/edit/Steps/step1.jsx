
import React, { useState } from "react";
import { Paper, Select, Box, Button, InputLabel, FormControl, TextField, Grid, MenuItem } from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import "../FormComponent.css"

// PERSONAL DETAILS STEP
const Step1 = ({ handleNext }) => {

  const [personal, setPersonal] = useState(
    { fname: '', lname: '', gender: '', phone: '', email: '', profession: '', about: '', dob: new Date() },
  );
  const [errors, setErrors] = useState({});


  function handleChange(evt) {
    const value = evt.target.value;
    setPersonal({ ...personal, [evt.target.name]: value });
  }

  // const handleChange = (event) => {

  //   const newPersonal = personal.map(i => {
  //     i[event.target.name] = event.target.value
  //     return i;
  //   })
  //   setPersonal(newPersonal);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(personal);

    const temp = validate();
    setErrors(temp);
    console.log(errors);

    console.log(Object.values(temp).length);
    if (Object.keys(temp).length === 0) {
      handleNext();
    }
  };

  function handle(e) {
    handleSubmit(e);
  }

  const validate = () => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!personal.fname) {
      error.fname = "First name is required!";
    }

    if (!personal.lname) {
      error.lname = "Last name is required!";
    }

    if (!personal.email) {
      error.email = "Email is required!";
    } else if (!regex.test(personal.email)) {
      error.email = "This is not a valid email format!";
    }

    if (!personal.phone) {
      error.phone = "";
      errors.phone = "Phone number is required!";
    }
    else if (personal.phone.length !== 10) {
      error.phone = "Invalid Phone Number";
    }

    if (!personal.profession) {
      error.profession = "Profession is required!";
    }

    if (!personal.about) {
      error.about = "About required!";
    }
    return error;
  };

  return (

    <form className="formHead" onSubmit={handleSubmit} >
      <Paper className="steps ">

        {/* {personal.map((per) => ( */}
        <div className="pt-5">
          <Grid container spacing={2} style={{ marginBottom: "16px" }}>
            <Grid item md={6}>
              <TextField fullWidth
                variant="outlined"
                name="fname"
                label="First Name"
                value={personal.fname}
                onChange={handleChange}
                error={errors.fname}
                helperText={errors.fname ? errors.fname : ""}
              />

            </Grid>
            <Grid item md={6}>
              <TextField fullWidth
                variant="outlined"
                name="lname"
                label="Last Name"
                value={personal.lname}
                onChange={handleChange}
                error={errors.lname}
                helperText={errors.lname ? errors.lname : ""}
              />
            </Grid>

          </Grid>

          <Grid container spacing={2} style={{ marginBottom: "16px" }}>

            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  name="gender"
                  value={personal.gender}
                  onChange={handleChange}
                  label="Gender"
                >
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>


            <Grid item md={6} >
              <TextField fullWidth
                name="phone"
                label="Phone"
                type={Number}
                value={personal.phone}
                onChange={handleChange}
                error={errors.phone}
                helperText={errors.phone ? errors.phone : ""}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginBottom: "16px" }}>

            <Grid item md={6}>
              <TextField fullWidth
                name="email"
                label="Email"
                value={personal.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? errors.email : ""}
              />
            </Grid>
            <Grid item md={6}>
              <TextField fullWidth
                name="profession"
                label="Profession"
                value={personal.profession}
                onChange={handleChange}
                error={errors.profession}
                helperText={errors.profession ? errors.profession : ""}
              />
            </Grid>


          </Grid>

          <Grid container spacing={2} style={{ marginBottom: "16px" }}>

            <Grid item md={6}>
              <Grid container>

                <Grid item md={3} style={{ marginTop: "16px" }}>
                  <label>Upload your photo:</label>

                </Grid>
                <Grid item md={8} style={{ marginTop: "16px" }}>
                  <input className="border-2"
                    accept="image/*"
                    type="file"
                    name="image"
                    label="Upload your photo"
                    multiple
                  />
                </Grid>
              </Grid>

            </Grid>
            <Grid item md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  label="Date of Birth"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={personal.dob}
                  onChange={(newValue) => {
                    personal.dob = newValue;
                    setPersonal({...personal});
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          < TextField fullWidth
            name="about"
            label="About Yourself"
            value={personal.about}
            onChange={handleChange}
            multiline
            rows={4}
            error={errors.about}
            helperText={errors.about ? errors.about : ""}
          />
        </div>
        {/* ))} */}

        <Grid container component={Box} justifyContent="flex-end" mt={2} p={2}>
          <Button
            variant="outlined"
            onClick={handle}
            color="primary"
          >
            Next
          </Button>
        </Grid>
      </Paper>
    </form>
  );
};

export default Step1;
