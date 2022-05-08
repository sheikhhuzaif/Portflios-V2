import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'
import { Input, Paper, InputLabel, FormControl, Select, Box, Button, Typography } from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import "../FormComponent.css"
import { useMutation, useQuery, gql } from "@apollo/client";

function getBaseData(baseData) {
  const basicData = baseData ? baseData.baseData : {};
  return basicData;
}

function getLists(baseData) {
  const lists = baseData ? baseData.lists : {};
  return lists
}
function getGenders(baseData) {
  const basicData = getBaseData(baseData);
  const lists = getLists(basicData);
  if (lists) {
    const genders = lists ? lists.genders : [];
    return genders
  }
}

// PERSONAL DETAILS STEP
export default function Step1({ state, handleNext }) {

  const [errors, setErrors] = useState({});


  const BASIC_DATA = gql`
  query baseData{
  baseData
  {
    lists
  }
  }
  `

  const GET_BASIC_INFO = gql`
  {
  basicInfo{
  gender
  dob
  phone
  picture
  profession
  about
 }
}
`

  const { loading, error, data } = useQuery(GET_BASIC_INFO);

  const [personal, setPersonal] = useState(
    { gender: '', phone: '', profession: '', about: '', picture: '', dob: new Date() },
  );

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
  React.useEffect(() => {
    console.log(state.parsedResume)
    const basicInfo = data && data.basicInfo;
    const phone = basicInfo && basicInfo.phone;
    const gender = basicInfo && basicInfo.gender;
    const dob = basicInfo && basicInfo.dob;
    const profession = basicInfo && basicInfo.profession;
    const about = basicInfo && basicInfo.about;
    const picture = basicInfo && basicInfo.picture;
    
    if(state.parsedResume.hasOwnProperty?.Designation){
      const Designation = state && state.parsedResume.Designation;
      personal.profession = Designation;
      Designation && setPersonal({ ...personal });
    }
    else{
      personal.profession = profession;
      setPersonal({ ...personal });
    }
    setPersonal({ ...personal, gender: gender, phone: phone, about: about, picture: '', dob: dob });


  }, [data, state.parsedResume]);


  const [updateBasicInfo, { data1 }] = useMutation(UPDATE_BASIC_INFO, {
    variables: {}
  });

  const { data: baseData } = useQuery(BASIC_DATA);
  const genders = getGenders(baseData);

  const handleMutation = (e) => {
    e.preventDefault();
    updateBasicInfo({
      variables: {
        about: personal.about,
        dob: personal.dob,
        gender: personal.gender,
        phone: personal.phone,
        picture: personal.picture,
        profession: personal.profession,
      }
    });
  }


  function handleChange(evt) {
    const value = evt.target.value;
    setPersonal({ ...personal, [evt.target.name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const temp = validate();
    setErrors(temp);

    console.log(Object.keys(temp).length);
    if (Object.keys(temp).length === 0) {
      handleNext();
    }
  };


  function handle(e) {
    console.log("bdjsajhdgvksajkdhgsayd")
    handleSubmit(e);
    handleMutation(e);
  }

  const validate = () => {
    const error = {};

    if (!personal.phone) {
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
    <form className="formHead">
      <Paper className="steps">
        <div className="pt-5">

          <Grid container spacing={2} style={{ marginBottom: "16px" }}>
            <Grid item md={6}>
              <FormControl fullWidth>
                <InputLabel id="Gender-Label">Gender</InputLabel>
                <Select name="gender" id="genders" labelId="Gender-Label" value={personal.gender} onChange={handleChange}>
                  {genders && genders?.map((item) => (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item md={6} >
              <TextField fullWidth
                name="phone"
                label="Phone"
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
                name="profession"
                label="Profession"
                value={personal.profession}
                onChange={handleChange}
                error={errors.profession}
                helperText={errors.profession ? errors.profession : ""}
              />
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
                    setPersonal({ ...personal });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
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
                    accept="image/*"
                    type="file"
                    label="Upload your photo"
                    value={personal.picture}
                    onChange={handleChange}
                    multiple
                  />
                </Grid>
              </Grid>
            </Grid>


          </Grid>

          <TextField fullWidth
            id="outlined-multiline-static"
            name="about"
            label="About"
            multiline
            rows={4}
            value={personal.about}
            onChange={handleChange}
            error={errors.about}
            helperText={errors.about ? errors.about : ""}
          />
        </div>

        <Grid container component={Box} justifyContent='flex-end' mt={2} p={2}>
          <Button
            variant="outlined"
            onClick={handle}
            color="primary"
          >
            Next
          </Button>
        </Grid>
      </Paper>
    </form >
  );
};

