import React, { useState } from "react";
import { Box, Grid, IconButton, Paper, TextField } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from '@mui/lab/DatePicker';

// Qual STEP

const Step3 = ({
  handleNext,
  handlePrev,
}) => {


 
  const [Qualifications, setQualifications] = useState([
    { id: uuidv4(), degree: "", year:"", university: "", GPA: "" },
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

  const handleAddQual = () => {
    setQualifications([...Qualifications,{ id: uuidv4(), degree: "", year:"", university: "", GPA: ""  }])
  }

  const handleRemoveQual = id => {
    const values = [...Qualifications];
    values.splice(values.findIndex(value => value.id === id), 1);
    setQualifications(values);
  }

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Your Qualifications",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
     

      {Qualifications.map((Qualification, id) => (
        <Grid container spacing={1} style={{ marginBottom: "16px" }} key={id}>

          <Grid item xs={2} >
            <TextField
              name="degreeName"
              label="Degree Name"
              value={Qualification.degree}
              onChange={event => handleChangeInput(Qualification.id, event)}
            />
            {/* <TextField
              name="degreeName"
              label="Year of passing"
              value={Qualification.year}
              onChange={event => handleChangeInput(Qualification.id, event)}
            /> */}
          </Grid>
          <Grid item xs={2}>
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
          <Grid item xs={2} >
            <TextField
              name="university"
              label="University"
              value={Qualification.university}
              onChange={event => handleChangeInput(Qualification.id, event)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              name="GPA"
              label="GPA"
              value={Qualification.GPA}
              onChange={event => handleChangeInput(Qualification.id, event)}
            />

          </Grid>
          
          <Grid item xs={2}>
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
          {renderButton({ label: "Next", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
