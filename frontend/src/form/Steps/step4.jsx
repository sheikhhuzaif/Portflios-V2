import React, { useState } from "react";
import { Box, Grid, IconButton, Paper } from "@material-ui/core";
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
import TextField from '@mui/material/TextField'

// SKILLS STEP




const Step4 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
}) => {
 
  const [skills, setSkills] = useState([
    { id: uuidv4(), skillname: '' },
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
    <form className="formHead"  onSubmit={handleSubmit}>
      <Paper className="steps">
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
        <Grid container  style={{ marginBottom: "16px" }} key={id}>


          <Grid item fullwidth  md={4}>
            <TextField
              
              name="skillname"
              label="Skill Name"
              value={skill.skillname}
              onChange={event => handleChangeInput(skill.id, event)}
            />

          </Grid>

          <Grid item>
          <IconButton disabled={skills.length === 1} onClick={() => handleRemoveSkills(skill.id)}>
            <RemoveIcon />
          </IconButton>
          <IconButton
            onClick={handleAddSkill}
          >
            <AddIcon />
          </IconButton>
          </Grid>
          <Grid item md={5}></Grid>


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

export default Step4;
