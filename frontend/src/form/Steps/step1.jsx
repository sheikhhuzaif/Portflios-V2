
import React, { useState } from "react";
import {  Grid, MenuItem  } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,

  renderInputField,

  renderText,
} from "../common/DisplayComponent";
import TextField from '@mui/material/TextField'
import { Input, Paper, Select,Box } from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import "../FormComponent.css"
import { useForm, Controller } from "react-hook-form";



// PERSONAL DETAILS STEP
const Step1 = ({ state, handleNext }) => {
  const [errors, setErrors] = useState({ fname: '', lname: '', gender: '', phone: '', email: '', profession: '' });


  const [DOB, setDOB] = useState(new Date());

  const [personal, setPersonal] = useState([
    { fname: '', lname: '', gender: '', phone: '', email: '', profession: '' },
  ]);

  const handleChange = (event) => {


    event.target.value.length <= 3
      ? (setErrors[event.target.name] = `${event.target.name} have at least 3 letter`)
      : (setErrors[event.target.name] = "");

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

  // const validate = (values) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.fname) {
  //     errors.fname = "";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }
  //   return errors;
  // };

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        <div className="font" mt={2} mb={5}>
          Please Fill personal Data
          {/* {renderText({
            label: "Please Fill personal Data",
            type: "h6",
            color: "textPrimary",
            align: "center",
          })} */}
        </div>

        <Grid container spacing={2} style={{ marginBottom: "16px" }}>
          <Grid item md={3}>
            <TextField fullWidth
            variant="outlined"
              name="fname"
              label="First Name"
              value={personal.fname}
              onChange={handleChange}
              
            />

          </Grid>
          <Grid item md={3}>
            <TextField fullWidth
            variant="outlined"
              name="lname"
              label="Last Name"
              value={personal.lname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={2}>

            <Select fullWidth
              defaultValue='g'
              name="gender"
              value={personal.gender}
              onChange={handleChange}
              label="Gender"
            >
              <MenuItem value="g">
                <em>Gender</em>
              </MenuItem>
              <MenuItem value='Male'>Male</MenuItem>
              <MenuItem value='Female'>Female</MenuItem>
            </Select>

          </Grid>
          <Grid item md={4} >
            <TextField fullWidth
              name="phone"
              label="Phone"
              type={Number}
              value={personal.phone}
              onChange={handleChange}
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
            />
          </Grid>

          <Grid item md={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker fullWidth
                disableFuture
                label="Date of Birth"
                openTo="year"
                views={['year', 'month', 'day']}
                value={DOB}
                onChange={(newValue) => {
                  setDOB(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
          </Grid>

        </Grid>

        <Grid container spacing={2} style={{ marginBottom: "16px" }}>

          <Grid item md={6}>
            <Grid container>

              <Grid item md={3} style={{ marginTop: "16px" }}>
                <label>Upload your photo:</label>

              </Grid>
              <Grid item md={8} style={{ marginTop: "16px" }}>
                <Input fullWidth
                  accept="image/*"
                  type="file"
                  name=""
                // label="Upload your photo"
                // value={personal.email}
                // onChange={handleChange}
                />
              </Grid>
            </Grid>

          </Grid>

          <Grid item md={6}>
            <TextField fullWidth
              name="profession"
              label="Profession"
              value={personal.profession}
              onChange={handleChange}
            />


          </Grid>

        </Grid>
        {/* <Grid container spacing={4} style={{ marginBottom: "16px" }, {marginLeft:"3px"} , {paddingRight:"80px"}}> */}
        <TextField fullWidth
          id="outlined-multiline-static"
          label="About Yourself"
          multiline
          rows={4}
        />
        {/* </Grid> */}

        <Grid container component={Box} justify='flex-end' mt={2} p={2}>
          {renderButton({ label: "Next", onClick: handle })}
        </Grid>
      </Paper>
    </form>
  );
};

export default Step1;
