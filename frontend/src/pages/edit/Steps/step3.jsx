import React, { useState } from "react";
import {Grid, Box, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import { Button, IconButton } from "@mui/material";

// Qual STEP

const Step3 = ({
  handleNext,
  handlePrev,
}) => {


  const [Qualifications, setQualifications] = useState([
    { id: uuidv4(), degree: "", year: "", university: "", GPA: "", de: "", ye: "", ue: "", ge: "" },
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted11");
    validate();

  };

  function handle(e) {
    handleSubmit(e);
    if(isNext())
    {
      handleNext();
    }
  }
  const isNext = () => {
    let isNext=true;

    for (let i=0; i<Qualifications.length; i++){
     if(Qualifications[i].de!=="" || Qualifications[i].ye!=="" || Qualifications[i].ue!=="" ||Qualifications[i].ge!=="" )
     {
       isNext=false;
       break;
     }
   }
    // Qualifications.map(i => {
    //     if(i.de!="" || i.ye!="" || i.ue!="" || i.ge!="")
    //     {
    //       isNext=false;
    //     }
    // })
    return isNext;
  };

  const handleAddQual = () => {
    setQualifications([...Qualifications, { id: uuidv4(), degree: "", year: "", university: "", GPA: "", de: "", ye: "", ue: "", ge: "" }])
  }

  const handleRemoveQual = id => {
    const values = [...Qualifications];
    values.splice(values.findIndex(value => value.id === id), 1);
    setQualifications(values);
  }

  const validate = () => {
    for (let i = 0; i < Qualifications.length; i++) {

      if (!Qualifications[i].degree) {
        Qualifications[i].de = "Degree required!";
        setQualifications([...Qualifications]);
      }
      if (Qualifications[i].degree) {
        Qualifications[i].de = "";
        setQualifications([...Qualifications]);
      }

      if (!Qualifications[i].year) {
        Qualifications[i].ye = "Year of passing required!";
        setQualifications([...Qualifications]);
      }
      if (Qualifications[i].year) {
        Qualifications[i].ye = "";
        setQualifications([...Qualifications]);
      }

      if (!Qualifications[i].university) {
        Qualifications[i].ue = "University required!";
        setQualifications([...Qualifications]);
      }
      if (Qualifications[i].university) {
        Qualifications[i].ue = "";
        setQualifications([...Qualifications]);
      }

      if (!Qualifications[i].GPA) {
        Qualifications[i].ge = "GPA required!";
        setQualifications([...Qualifications]);
      }
      else if (i.GPA > 10) {
        Qualifications[i].ge = "GPA should be less than 10.0";
        setQualifications([...Qualifications]);
      }
      else {
        Qualifications[i].ge = "";
        setQualifications([...Qualifications]);
      }
    }
  };


  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">

        {Qualifications.map((Qualification) => (
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={Qualification.id}>

            <Grid item md={3} >
              <TextField
                fullWidth
                name="degree"
                label="Degree Name"
                value={Qualification.degree}
                onChange={event => handleChangeInput(Qualification.id, event)}
                error={Qualification.de}
                helperText={Qualification.de ? Qualification.de : ""}
              />
            </Grid>

            <Grid item md={2}>
              <TextField
                fullWidth
                name="year"
                label="Year of passing"
                value={Qualification.year}
                onChange={event => handleChangeInput(Qualification.id, event)}
                error={Qualification.ye}
                helperText={Qualification.ye ? Qualification.ye : ""}
              />

            </Grid>
            <Grid item md={3} >
              <TextField
                fullWidth
                name="university"
                label="University"
                value={Qualification.university}
                onChange={event => handleChangeInput(Qualification.id, event)}
                error={Qualification.ue}
                helperText={Qualification.ue ? Qualification.ue : ""}
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                fullWidth
                name="GPA"
                label="GPA"
                value={Qualification.GPA}
                onChange={event => handleChangeInput(Qualification.id, event)}
                error={Qualification.ge}
                helperText={Qualification.ge ? Qualification.ge : ""}
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

export default Step3;
