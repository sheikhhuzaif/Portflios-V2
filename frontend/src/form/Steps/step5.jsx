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

// WORK exp STEP

const Step5 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
}) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const [experience, setExperience] = useState([
    { id: uuidv4(), title: '', company: '', startDate: '', endDate: Date() },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  function handle(e) {
    handleSubmit(e);
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
    setExperience([...experience, { id: uuidv4(), title: '', company: '', endDate: '' }])
  }

  const handleRemoveExp = id => {
    const values = [...experience];
    values.splice(values.findIndex(value => value.id === id), 1);
    setExperience(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        <Box mt={2} mb={2}>
          {renderText({
            label: "Work Experience",
            type: "h6",
            color: "textPrimary",
            align: "center",
          })}
        </Box>
        {/* skill: "",
      workExperence: "",
      expectedSalary: "", */}

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
            <Grid item md={2} >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  views={['year', 'month']}
                  label="Start Date"
                  value={exp.startDate}
                  onChange={event => handleChangeInput(exp.id, event)}
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
                  onChange={event => handleChangeInput(exp.id, event)}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
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

export default Step5;
