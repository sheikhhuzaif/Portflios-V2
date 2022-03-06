import React, { useState } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField'
import { Button, IconButton } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useMutation, gql } from "@apollo/client";


// Qual STEP

export default function Step3({
  handleNext,
  handlePrev,
}) {

  // const [Dates, setDates] = React.useState([
  //   { startDate: new Date(), endDate: new Date() }
  // ]);
  // const [startDate, setstartDate] = React.useState(new Date());
  // const [endDate, setendDate] = React.useState(new Date());

  const [Qualifications, setQualifications] = useState([
    { id: uuidv4(), pk: null, courseName: "", startDate: "01/02/2000", endDate: "01/02/2000", university: "", gpa: "" },
  ]);

  const UPDATE_EDUCATION = gql`
    mutation updateEducation($educationData: [GenericScalar]){
    updateEducation(
      educationData: $educationData
    )
    {
      success
    }
    }
  `
  const [updateEducation] = useMutation(UPDATE_EDUCATION, {
    variables: {}
  });

  const handleMutation = (e) => {
    e.preventDefault();
    updateEducation({
      variables: {
        educationData: Qualifications,
      }
    });
  }

  const handleChangeInput = (id, event) => {
    const newQualifications = Qualifications.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setQualifications(newQualifications);
  }

  // const handleChangeDate = (id, event) => {
  //   const newDates = Dates.map(i => {
  //     if (id === i.id) {
  //       i[event.target.name] = event.target.value
  //     }
  //     return i;
  //   })

  //   setDates(newDates);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  function handle(e) {
    handleSubmit(e);
    handleMutation(e);
    handleNext();
  }

  const handleAddQual = () => {
   // setDates([...Dates, { startDate: new Date(), endDate: new Date() }]);
    setQualifications([...Qualifications, { id: uuidv4(), pk: null, courseName: "", startDate: "01/02/2000", endDate: "01/02/2000", university: "", gpa: "" }])
  }

  const handleRemoveQual = pk => {
    const values = [...Qualifications];
    values.splice(values.findIndex(value => value.pk === pk), 1);
    setQualifications(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
      <Box mt={3} mb={2} />

        {Qualifications.map((Qualification, i) => (
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={Qualification.id}>

            <Grid item md={2} >
              <TextField
                name="courseName"
                label="Degree Name"
                value={Qualification.degree}
                onChange={event => handleChangeInput(Qualification.id, event)}
              />
            </Grid>

            <Grid item md={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  name="startDate"
                  label="Year of Starting"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={Qualification.startDate}
                  // onChange={(newValue) => {
                  //   setstartDate(newValue);
                  // }}
                 onChange={event => handleChangeInput(Qualification.id, event)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item md={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  name="endDate"
                  label="Year of Ending"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={Qualification.endDate}
                  // onChange={(newValue) => {
                  //   setendDate(newValue);
                  // }}
                  onChange={event => handleChangeInput(Qualification.id, event)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={2} >
              <TextField
                name="university"
                label="University"
                value={Qualification.university}
                onChange={event => handleChangeInput(Qualification.id, event)}
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                name="gpa"
                label="GPA"
                value={Qualification.GPA}
                onChange={event => handleChangeInput(Qualification.id, event)}
              />

            </Grid>

            <Grid item md={2}>
              <IconButton disabled={Qualifications.length === 1} onClick={() => handleRemoveQual(Qualification.id)}>
                <RemoveIcon />
              </IconButton>
              <IconButton
                onClick={handleAddQual}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>

        ))}

        <Grid container component={Box} justify='flex-end' mt={2} p={2}>
          <Box ml={2}>

            <Button
              variant="outlined"
              onClick={handlePrev}
              color="primary"
            >
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