import React, { useState } from "react";
import { Grid, MenuItem } from "@material-ui/core";
import TextField from '@mui/material/TextField'
import { Input, Paper, Select, Box, Button } from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import "../FormComponent.css"
import { useMutation, gql } from "@apollo/client";



// PERSONAL DETAILS STEP
export default function Step1({ state, handleNext }) {
  const [errors, setErrors] = useState({ fname: '', lname: '', gender: '', phone: '', email: '', profession: '' });


  const [DOB, setDOB] = useState(new Date());

  const [personal, setPersonal] = useState([
    { fname: '', lname: '', gender: '', phone: '', email: '', profession: '', about: '', picture: '', dob: DOB},
  ]);

  const UPDATE_BASIC_INFO = gql`
    mutation updateBasicInfo($about: String, $gender: String, $phone: String, $profession: String, $picture: GenericScalar, $dob: String){
    updateBasicInfo(
        about: $about,
        gender: $gender,
        phone: $phone,
        profession: $profession
        picture: $picture
        dob :$dob
    )
    {
      success
    }
    }
  `

  const [updateBasicInfo, { data, loading, error }] = useMutation(UPDATE_BASIC_INFO, {
    variables: {}
  });

  const handleMutation = (e) => {
    e.preventDefault();
    console.log("abcdsabjdhsahjgdgasjukfgkujsa: ", personal[0].about);
    updateBasicInfo({
      variables: {
        about: personal[0].about,
        dob: personal[0].dob,
        gender: personal[0].gender,
        phone: personal[0].phone,
        picture: personal[0].picture,
        profession: personal[0].profession,
      }
    });
  }

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
    setErrors(validate());



  };

  function handle(e) {
    handleSubmit(e);
    handleMutation(e);
    handleNext();
  }

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    console.log(personal);
    console.log(personal.fname);
    console.log(errors);
    console.log(errors.fname);


    if (!personal.fname) {
      errors.fname = "First name is required!";
    }

    // if (personal.fname) {
    //   errors.fname = "done";
    // }

    if (!personal.lname) {
      errors.lname = "Last name is required!";
    }
    if (!personal.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(personal.email)) {
      errors.email = "This is not a valid email format!";
    }
    //  if (personal.phone.length != 10) {
    //   errors.phone = "Invalid Phone Number";
    // }
    if (!personal.profession) {
      errors.profession = "Profession is required!";
    }
    if (!personal.about) {
      errors.about = "About required!";
    }
    return errors;
  };

  return (
    <form className="formHead">
      <Paper className="steps">
        <div className="font" mt={2} mb={5}>
          Please Fill personal Data
        </div>

        <Grid container spacing={2} style={{ marginBottom: "16px" }}>
          <Grid item md={6}>
            <TextField fullWidth
              variant="outlined"
              name="fname"
              label="First Name"
              value={personal.fname}
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{errors.fname}</span>


          </Grid>
          <Grid item md={6}>
            <TextField fullWidth
              variant="outlined"
              name="lname"
              label="Last Name"
              value={personal.lname}
              onChange={handleChange}
            // error={errors.lname}
            />
            <span style={{ color: "red" }}>{errors.lname}</span>
          </Grid>

        </Grid>

        <Grid container spacing={2} style={{ marginBottom: "16px" }}>

          <Grid item md={4}>

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
          <Grid item md={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
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
          </Grid>

          <Grid item md={6} >
            <TextField fullWidth
              name="phone"
              label="Phone"
              type={Number}
              value={personal.phone}
              onChange={handleChange}
            // error={errors.phone}
            />
            <span style={{ color: "red" }}>{errors.phone}</span>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginBottom: "16px" }}>

          <Grid item md={6}>
            <TextField fullWidth
              name="email"
              label="Email"
              value={personal.email}
              onChange={handleChange}
            // error={errors.email}
            />
            <span style={{ color: "red" }}>{errors.email}</span>
          </Grid>
          <Grid item md={6}>
            <TextField fullWidth
              name="profession"
              label="Profession"
              value={personal.profession}
              onChange={handleChange}
            // error={errors.profession}
            />
            <span style={{ color: "red" }}>{errors.profession}</span>

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
                  name="picture"
                  variant="outlined"
                  accept="image/*"
                  type="file"
                // label="Upload your photo"
                  value={personal.picture}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

          </Grid>



        </Grid>
        {/* <Grid container spacing={4} style={{ marginBottom: "16px" }, {marginLeft:"3px"} , {paddingRight:"80px"}}> */}
        <TextField fullWidth
          id="outlined-multiline-static"
          name="about"
          label="About"
          multiline
          rows={4}
          value={personal.about}
          onChange={handleChange}
        // error={errors.about}

        />
        <span style={{ color: "red" }}>{errors.about}</span>

        {/* </Grid> */}

        <Grid container component={Box} justify='flex-end' mt={2} p={2}>
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

