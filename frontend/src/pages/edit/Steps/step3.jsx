import React, { useState } from "react";
import { Grid, Box, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField'
import { Button, IconButton } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useQuery, useMutation, gql } from "@apollo/client";


// Qual STEP

export default function Step3({
  handleNext,
  handlePrev,
}) {

  const GET_EDUCATION = gql`
  {
    educations{
    id
    courseName
    university
    startDate
    endDate
    gpa
  }
  }
  `
  const { loading, error, data } = useQuery(GET_EDUCATION);


  const [Qualifications, setQualifications] = useState([
    { id: uuidv4(), pk: null, courseName: "", startDate: new Date(), endDate: new Date(), university: "", gpa: "" },
  ]);

  const UPDATE_EDUCATION = gql`
    mutation updateEducation($educationData: [GenericScalar]){
    updateEducation(
      educationData: $educationData
    )
    {
      success
    }
    }
  `
  const DELETE_EDUCATION = gql`
  mutation deleteEducation($pk: UUID) {
    deleteEducation(pk: $pk) {
      success
    }
  }
`;
  const [updateEducation] = useMutation(UPDATE_EDUCATION, {
    variables: {}
  });

  const [deleteEducation] = useMutation(DELETE_EDUCATION, {
    variables: {}
  });

  React.useEffect(() => {
    const educations = data && data.educations;
    const length = educations && educations.reduce((a, obj) => a + Object.keys(obj).length, 0);
    if (length) {
      let education = educations && educations.map(obj => ({
        pk: obj.id,
        id: obj.id,
        startDate: obj.startDate,
        endDate: obj.endDate,
        courseName: obj.courseName,
        university: obj.university,
        gpa: obj.gpa
      }));
      education && setQualifications(education);
    }
  }, [data]);

  const handleMutation = (e) => {
    e.preventDefault();
    updateEducation({
      variables: {
        educationData: Qualifications,
      }
    });
  }

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
    handleMutation(e);
    handleNext();
  }

  const handleAddQual = () => {
    setQualifications([...Qualifications, { id: uuidv4(), pk: null, courseName: "", startDate: new Date(), endDate: new Date(), university: "", gpa: "" }])
  }

  const handleRemoveQual = pk => {
    const values = [...Qualifications];
    deleteEducation({ variables: { pk: pk } });
    values.splice(values.findIndex(value => value.pk === pk), 1);
    setQualifications(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        {Qualifications.map((Qualification) => (
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={Qualification.id}>

            <Grid item md={2} >
              <TextField
                fullWidth
                name="courseName"
                label="Degree Name"
                value={Qualification.courseName}
                onChange={event => handleChangeInput(Qualification.id, event)}
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
                  value={Qualification.startDate}
                  onChange={(newValue) => {
                    Qualification.startDate = newValue
                    setQualifications([...Qualifications]);
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
                  value={Qualification.endDate}
                  onChange={(newValue) => {
                    Qualification.endDate = newValue
                    setQualifications([...Qualifications]);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={2} >
              <TextField
                fullWidth
                name="university"
                label="University"
                value={Qualification.university}
                onChange={event => handleChangeInput(Qualification.id, event)}
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                fullWidth
                name="gpa"
                label="GPA"
                value={Qualification.gpa}
                onChange={event => handleChangeInput(Qualification.id, event)}
              />

            </Grid>

            <Grid item md={2}>
              <IconButton disabled={Qualifications.length === 1} onClick={() => handleRemoveQual(Qualification.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={handleAddQual}
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