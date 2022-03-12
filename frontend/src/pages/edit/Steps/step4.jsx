import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import { Grid, Button, IconButton, Paper, Box } from "@mui/material";

// SKILLS STEP

const Step4 = ({
  handleNext,
  handlePrev,
}) => {

  const [skills, setSkills] = useState([
    { id: uuidv4(), skillname: '', se: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    validate();
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

    for (let i = 0; i < skills.length; i++) {
      if (skills[i].se !== "") {
        isNext = false;
        break;
      }
    }
    return isNext;
  };

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
    setSkills([...skills, { id: uuidv4(), skillname: '', se: "" }])
  }

  const handleRemoveSkills = id => {
    const values = [...skills];
    values.splice(values.findIndex(value => value.id === id), 1);
    setSkills(values);
  }

  const validate = () => {
    for (let i = 0; i < skills.length; i++) {

      if (!skills[i].skillname) {
        skills[i].se = "Skill Name required!";
        setSkills([...skills]);
      }
      if (skills[i].skillname) {
        skills[i].se = "";
        setSkills([...skills]);
      }

    }
  };

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">

        {skills.map((skill, id) => (
          <Grid container style={{ marginBottom: "16px" }} key={skill.id}>


            <Grid item md={4}>
              <TextField
                fullWidth
                variant="outlined"
                name="skillname"
                label="Skill Name"
                value={skill.skillname}
                onChange={event => handleChangeInput(skill.id, event)}
                error={skill.se}
                helperText={skill.se ? skill.se : ""}
              />

            </Grid>

            <Grid item md={4}>
              <IconButton disabled={skills.length === 1} onClick={() => handleRemoveSkills(skill.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={handleAddSkill}
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

export default Step4;
