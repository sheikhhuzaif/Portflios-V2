import React, { useState } from "react";
import { Grid } from "@material-ui/core";
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
import { Button, IconButton, Paper, Box } from "@mui/material";
import { useMutation, gql } from "@apollo/client";

// SKILLS STEP

export default function Step4({
  state,
  handleChange,
  handleNext,
  handlePrev,
}) {

  const [skills, setSkills] = useState([
    { id: uuidv4(), pk: null, name: "" },
  ]);

  const UPDATE_SKILL = gql`
    mutation updateSkill($skillData: [GenericScalar]){
    updateSkill(
      skillData: $skillData
    )
    {
      success
    }
    }
  `
  const [updateSkill] = useMutation(UPDATE_SKILL, {
    variables: {}
  });

  const handleMutation = (e) => {
    console.log("skills", skills)
    e.preventDefault();
    updateSkill({
      variables: {
        skillData: skills,
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
    const newSkill = skills.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setSkills(newSkill);
  }

  const handleAddSkill = () => {
    setSkills([...skills, { id: uuidv4(), pk: null, name: "" }])
  }

  const handleRemoveSkills = pk => {
    const values = [...skills];
    values.splice(values.findIndex(value => value.pk === pk), 1);
    setSkills(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps" >
        <Box mt={3} mb={2} />

        {skills.map((skill) => (
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={skill.id}>


            <Grid item md={4}>
              <TextField
                fullwidth
                varient="outlined"
                name="name"
                label="Skill Name"
                value={skill.name}
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