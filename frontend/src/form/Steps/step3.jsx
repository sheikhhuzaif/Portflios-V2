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

// SKILLS STEP




const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
 
  const [skills, setSkills] = useState([
    { id: uuidv4(), skillname: '' },
  ]);

  const handleChangeInput = (id, event) => {
    const newSkill = skills.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setSkills(newSkill);
  }

  const handleAddSkill = () => {
    setSkills([...skills, { id: uuidv4(),  skillname: '' }])
  }

  const handleRemoveSkills = id => {
    const values  = [...skills];
    values.splice(values.findIndex(value => value.id === id), 1);
    setSkills(values);
  }

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "SKills you have",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {/* skill: "",
      workExperence: "",
      expectedSalary: "", */}

      {skills.map((skill, id) => (
        <Grid container spacing={1} style={{ marginBottom: "16px" }} key={id}>


          <Grid item xs={12} sm={6}>
            <TextField
              name="skillname"
              label="Skill Name"
              value={skill.skillname}
              onChange={event => handleChangeInput(skill.id, event)}
            />

          </Grid>
          <IconButton disabled={skills.length === 1} onClick={() => handleRemoveSkills(skill.id)}>
            <RemoveIcon />
          </IconButton>
          <IconButton
            onClick={handleAddSkill}
          >
            <AddIcon />
          </IconButton>

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
