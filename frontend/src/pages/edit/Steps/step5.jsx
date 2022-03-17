import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import { Button, IconButton, Paper, Box, Grid } from "@mui/material";
import { useQuery, useMutation, gql } from "@apollo/client";

// WORK exp STEP

export default function Step5({
  handleNext,
  handlePrev,
}) {

  const GET_WORK = gql`
  {
    works{
    id
    title
    company
    startDate
    endDate
  }
  }
  `
  const { loading, error, data } = useQuery(GET_WORK);

  const [experience, setExperience] = useState([
    { id: uuidv4(), pk: null, title: '', company: '', startDate: new Date(), endDate: new Date() },
  ]);

  const UPDATE_WORK = gql`
    mutation updateWork($workData: [GenericScalar]){
    updateWork(
      workData: $workData
    )
    {
      success
    }
    }
  `

  const DELETE_WORK = gql`
mutation deleteWork($pk: UUID) {
  deleteWork(pk: $pk) {
    success
  }
}
`

  const [deleteWork] = useMutation(DELETE_WORK, {
    variables: {}
  });

  const [updateWork] = useMutation(UPDATE_WORK, {
    variables: {}
  });

  React.useEffect(() => {
    const works = data && data.works;
    const length = works && works.reduce((a, obj) => a + Object.keys(obj).length, 0);
    if (length) {
      let work = works && works.map(obj => ({
        pk: obj.id,
        id: obj.id,
        startDate: obj.startDate,
        endDate: obj.endDate,
        title: obj.title,
        company: obj.company,
      }));
      work && setExperience(work);
    }
  }, [data]);


  const handleMutation = (e) => {
    e.preventDefault();
    updateWork({
      variables: {
        workData: experience,
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
    const newExp = experience.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setExperience(newExp);
  }

  const handleAddExp = () => {
    setExperience([...experience, { id: uuidv4(), pk: null, title: '', company: '', endDate: new Date(), startDate: new Date() }])
  }

  const handleRemoveExp = pk => {
    const values = [...experience];
    deleteWork({ variables: { pk: pk } });
    values.splice(values.findIndex(value => value.pk === pk), 1);
    setExperience(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
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
            <Grid item md={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  name="startDate"
                  label="Year of Starting"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={exp.startDate}
                  onChange={(newValue) => {
                    exp.startDate = newValue
                    setExperience([...experience]);
                    console.log(experience);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item md={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disableFuture
                  name="endDate"
                  label="Year of Ending"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={exp.endDate}
                  onChange={(newValue) => {
                    exp.endDate = newValue
                    setExperience([...experience]);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>


            <Grid item md={2}>
              <IconButton disabled={experience.length === 1} onClick={() => handleRemoveExp(exp.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={handleAddExp}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}

        <Grid container component={Box} justifyContent='flex-end' mt={2} p={2}>
          {/* <Box ml={2}>
            <Button
              variant="outlined"
              onClick={handlePrev}
              color="primary"
            >
              Back
            </Button>
          </Box> */}
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
