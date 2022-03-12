import React, { useState } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import { Button, IconButton } from "@mui/material";
import { useMutation, gql } from "@apollo/client";

// WORK exp STEP

export default function Step5({
  state,
  handleChange,
  handleNext,
  handlePrev,
}) {

  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  const [experience, setExperience] = useState([
    { id: uuidv4(), pk: null, title: '', company: '', startDate: startDate, endDate: endDate },
  ]);

  const UPDATE_WORK = gql`
    mutation updateWork($workData: [GenericScalar]){
    updateWork(
      workData: $workData
    )
    {
      success
    }
    }
  `
  const [updateWork] = useMutation(UPDATE_WORK, {
    variables: {}
  });

  const handleMutation = (e) => {
    e.preventDefault();
    updateWork({
      variables: {
        workData: experience,
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  function handle(e) {
    handleSubmit(e);
    handleMutation(e);
    handleNext();
  }

  const handleChangeInput = (id, event) => {
    const newExp = experience.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setExperience(newExp);
  }

  const handleAddExp = () => {
    setExperience([...experience, { id: uuidv4(), pk: null, title: '', company: '', endDate: endDate, startDate: startDate }])
  }

  const handleRemoveExp = pk => {
    const values = [...experience];
    values.splice(values.findIndex(value => value.pk === pk), 1);
    setExperience(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        <Box mt={3} mb={2} />

        {experience.map((exp) => (
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={exp.id}>

            <Grid item md={3} >
              <TextField fullWidth
                name="title"
                label="Job Title"
                value={exp.title}
                onChange={event => handleChangeInput(exp.id, event)}
              />
            </Grid>

            <Grid item md={3} >
              <TextField fullWidth
                name="company"
                label="Company Name"
                value={exp.company}
                onChange={event => handleChangeInput(exp.id, event)}
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
                  value={exp.startDate}
                  onChange={(newValue) => {
                    setstartDate(newValue);
                  }}
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
                  value={exp.endDate}
                  onChange={(newValue) => {
                    setendDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>


            <Grid item md={2}>
              <IconButton disabled={experience.length === 1} onClick={() => handleRemoveExp(exp.id)}>
                <RemoveIcon />
              </IconButton>
              <IconButton
                onClick={handleAddExp}
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
