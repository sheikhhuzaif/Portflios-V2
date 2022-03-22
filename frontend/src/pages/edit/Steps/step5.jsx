import React, { useState } from "react";
import {Grid, Box, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import { Button, IconButton } from "@mui/material";

// WORK exp STEP

const Step5 = ({
  handleNext,
  handlePrev,
}) => {

  const [experience, setExperience] = useState([
    { id: uuidv4(), title: '', company: '', startDate: new Date(), endDate: new Date(), te: "", ce: "" },
  ]);

  // const [date,setDate]=useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    validate();
  };

  const validate = () => {
    for (let i = 0; i < experience.length; i++) {

      if (!experience[i].title) {
        experience[i].te = "Title required!";
        setExperience([...experience]);
      }
      if (experience[i].title) {
        experience[i].te = "";
        setExperience([...experience]);
      }

      if (!experience[i].company) {
        experience[i].ce = "Company required!";
        setExperience([...experience]);
      }
      if (experience[i].company) {
        experience[i].ce = "";
        setExperience([...experience]);
      }
    }
  };

  function handle(e) {
    handleSubmit(e);
    if (isNext()) {
      console.log("in next");
      handleNext();
    }
  }

  const isNext = () => {
    let isNext = true;

    for (let i = 0; i < experience.length; i++) {
      if (experience[i].te !== "" || experience[i].ce !== "") {
        isNext = false;
        break;
      }
    }
    return isNext;
  };

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
    setExperience([...experience, { id: uuidv4(), title: '', company: '', startDate: new Date(), endDate: new Date() }])
  }

  const handleRemoveExp = id => {
    const values = [...experience];
    values.splice(values.findIndex(value => value.id === id), 1);
    setExperience(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        {experience.map((exp) => (
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={exp.id}>

            <Grid item md={3} >
              <TextField fullWidth
                name="title"
                label="Job Title"
                value={exp.title}
                onChange={event => handleChangeInput(exp.id, event)}
                error={exp.te}
                helperText={exp.te ? exp.te : ""}
              />
            </Grid>

            <Grid item md={3} >
              <TextField fullWidth
                name="company"
                label="Company Name"
                value={exp.company}
                onChange={event => handleChangeInput(exp.id, event)}
                error={exp.ce}
                helperText={exp.ce ? exp.ce : ""}
              />
            </Grid>
            <Grid item md={2} >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  views={['year', 'month']}
                  label="Start Date"
                  value={exp.startDate}
                  onChange={(newValue) => {
                    exp.startDate = newValue
                    setExperience([...experience]);
                    console.log(experience);

                  }}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={2} >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  views={['year', 'month']}
                  label="End Date"
                  value={exp.endDate}
                  onChange={(newValue) => {
                    exp.endDate = newValue
                    setExperience([...experience]);
                  }}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </LocalizationProvider>
            </Grid>


            <Grid item md={2}>
              <IconButton disabled={experience.length === 1} onClick={() => handleRemoveExp(exp.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={handleAddExp}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}

        <Grid container component={Box} justifyContent='flex-end' mt={2} p={2}>
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

export default Step5;
