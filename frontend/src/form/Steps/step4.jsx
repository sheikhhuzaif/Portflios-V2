import React, { useState } from "react";
import {  Grid  } from "@material-ui/core";
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
import { Button, IconButton ,Paper, Box} from "@mui/material";

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
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setSkills(newSkill);
  }

  const handleAddSkill = () => {
    setSkills([...skills, { id: uuidv4(), skillname: '' }])
  }

  const handleRemoveSkills = id => {
    const values = [...skills];
    values.splice(values.findIndex(value => value.id === id), 1);
    setSkills(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        <Box mt={2} mb={2}>
          {renderText({
            label: "Skills you have",
            type: "h6",
            color: "textPrimary",
            align: "center",
          })}
        </Box>
        {/* skill: "",
      workExperence: "",
      expectedSalary: "", */}

        {skills.map((skill, id) => (
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={skill.id}>


            <Grid item md={4}>
              <TextField
                fullwidth
                varient="outlined"
                name="skillname"
                label="Skill Name"
                value={skill.skillname}
                onChange={event => handleChangeInput(skill.id, event)}
              />

            </Grid>

            <Grid item md={4}> 
              <IconButton disabled={skills.length === 1} onClick={() => handleRemoveSkills(skill.id)}>
                <RemoveIcon />
              </IconButton>
              <IconButton
                onClick={handleAddSkill}
              >
                <AddIcon />
              </IconButton>
            </Grid>
            {/* <Grid item md={5}></Grid> */}


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

export default Step4;
