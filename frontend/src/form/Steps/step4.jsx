import React, { useState } from "react";
import { Box, Grid, IconButton, Paper, TextField } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
// WORK exp STEP

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {

  const [experience, setExperience] = useState([
    { id: uuidv4(), title: '', company: '' },
  ]);

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
    setExperience([...experience, { id: uuidv4(), title: '', company: '' }])
  }

  const handleRemoveExp = id => {
    const values = [...experience];
    values.splice(values.findIndex(value => value.id === id), 1);
    setExperience(values);
  }

  return (
    <Paper style={styles.steps}>
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

      {experience.map((exp, id) => (
        <Grid container style={{ marginBottom: "16px" }} key={id}>

          <Grid item xs={5} >
          <TextField
              name="title"
              label="Job Title"
              value={experience.title}
              onChange={event => handleChangeInput(experience.id, event)}
            />
          </Grid>
          
          <Grid item xs={5} >
            <TextField
              name="company"
              label="Company Name"
              value={experience.company}
              onChange={event => handleChangeInput(experience.id, event)}
            />
          </Grid>
         
          <Grid item xs={2}>
            <IconButton disabled={experience.length === 1} onClick={() => handleRemoveExp(experience.id)}>
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
