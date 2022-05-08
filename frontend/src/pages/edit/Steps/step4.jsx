import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import { Button, IconButton, Paper, Box, Grid } from "@mui/material";
import { useQuery, useMutation, gql } from "@apollo/client";

// SKILLS STEP

export default function Step4({
  state,
  handleNext,
  handlePrev,
}) {

  const GET_SKILLS = gql`
  {
    skills{
    id
    name
  }
  }
  `
  const { loading, error, data, refetch } = useQuery(GET_SKILLS);

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
  const DELETE_SKILL = gql`
    mutation deleteSkill($pk: UUID) {
      deleteSkill(pk: $pk) {
        success
      }
    }
  `

  const [updateSkill] = useMutation(UPDATE_SKILL, {
    variables: {}
  });

  const [deleteSkill] = useMutation(DELETE_SKILL, {
    variables: {}
  });

  React.useEffect(() => {
    if (state.parsedResume.hasOwnProperty("Skills")) {
      const skills = state && state.parsedResume.Skills;
      const length = skills.length;
      if (length) {
        let skill = skills && skills.map(obj => ({
          pk: null,
          id: uuidv4(),
          name: obj,
        }));
        skill && setSkills(skill);
      }

    }
    else {

      const skills = data && data.skills;
      const length = skills && skills.reduce((a, obj) => a + Object.keys(obj).length, 0);
      if (length) {
        let skill = skills && skills.map(obj => ({
          pk: obj.id,
          id: obj.id,
          name: obj.name,
        }));
        skill && setSkills(skill);
      }
    }
  }, [data, state.parsedResume]);

  const handleMutation = (e) => {
    console.log("skills", skills)
    e.preventDefault();
    updateSkill({
      variables: {
        skillData: skills,
      }
    });
    refetch();
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
    deleteSkill({ variables: { pk: pk } });
    values.splice(values.findIndex(value => value.pk === pk), 1);
    setSkills(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps" >
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