import React, { useState } from "react";
import { Box, Grid, IconButton, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField'

// Qual STEP

const Step3 = ({
  handleNext,
  handlePrev,
}) => {



  const [Qualifications, setQualifications] = useState([
    { id: uuidv4(), degree: "", year: "", university: "", GPA: "" },
  ]);

  const handleChangeInput = (id, event) => {
    const newQualifications = Qualifications.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setQualifications(newQualifications);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  function handle(e) {
    handleSubmit(e);
    handleNext();
  }

  const handleAddQual = () => {
    setQualifications([...Qualifications, { id: uuidv4(), degree: "", year: "", university: "", GPA: "" }])
  }

  const handleRemoveQual = id => {
    const values = [...Qualifications];
    values.splice(values.findIndex(value => value.id === id), 1);
    setQualifications(values);
  }

  return (
    <form className="formHead"  onSubmit={handleSubmit}>
      <Paper className="steps">
      <Box mt={2} mb={2}>
        {renderText({
          label: "Your Qualifications",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>


      {Qualifications.map((Qualification) => (
        <Grid container spacing={2} style={{ marginBottom: "16px" }} key={Qualification.id}>

          <Grid item md={2} >
            <TextField
              name="degree"
              label="Degree Name"
              value={Qualification.degree}
              onChange={event => handleChangeInput(Qualification.id, event)}
            />
          </Grid>

          <Grid item md={2}>
            <TextField
              name="year"
              label="Year of passing"
              value={Qualification.year}
              onChange={event => handleChangeInput(Qualification.id, event)}
            />
            {/* <DatePicker
          views={['year']}
          label="Year only"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        /> */}
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
              name="GPA"
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

export default Step3;
