import React, { useState } from "react";
import { Grid, Box, Paper, MenuItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select';
import { Button, FormControl, IconButton, InputLabel } from "@mui/material";
// import MenuItem from '@mui/material/MenuItem';


// WORK exp STEP

const Step6 = ({
  handleNext,
  handlePrev,
}) => {

  const items = ["GitHub", "LinkedIn", "Telegram", "Instagram", "Facebook"]
  // const remove = (i) => {

  // }
  const [socials, setSocials] = useState([
    { id: uuidv4(), social: '', link: '', se: "", le: "" },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(socials);
    validate();
  };

  const validate = () => {
    for (let i = 0; i < socials.length; i++) {

      if (!socials[i].link) {
        socials[i].le = "Link required!";
        setSocials([...socials]);
      }
      if (socials[i].link) {
        socials[i].le = "";
        setSocials([...socials]);
      }

      if (!socials[i].social) {
        socials[i].se = "Choose an option";
        setSocials([...socials]);
      }
      if (socials[i].social) {
        socials[i].se = "";
        setSocials([...socials]);
      }
    }
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

    for (let i = 0; i < socials.length; i++) {
      if (socials[i].se !== "" || socials[i].le !== "") {
        isNext = false;
        break;
      }
    }
    return isNext;
  };

  const handleChangeInput = (id, event) => {
    const newSocial = socials.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }

      

      return i;
    })

    setSocials(newSocial);
  }

  const handleAddSocial = () => {
    setSocials([...socials, { id: uuidv4(), social: '', link: '', se: "", le: "" }])
  }

  const handleRemoveSocial = id => {
    const values = [...socials];
    values.splice(values.findIndex(value => value.id === id), 1);
    setSocials(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        {socials.map((social) => (
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={social.id}>

            <Grid item md={3} >
              <FormControl fullWidth>
                <InputLabel id="social">Social Accounts</InputLabel>
                <Select
                  labelId="social"
                  id="social"
                  name="social"
                  value={social.social}
                  onChange={event => handleChangeInput(social.id, event)}
                  label="Social Accounts"
                  error={social.se}
                  helperText={social.se ? social.se : ""}
                >
                  {items.map((i) => (
                    <MenuItem value={i}>{i}</MenuItem>

                  ))}

                </Select>
              </FormControl>

            </Grid>

            <Grid item md={5} >
              <TextField fullWidth
                name="link"
                label="Profile Link"
                value={social.link}
                onChange={event => handleChangeInput(social.id, event)}
                error={social.le}
                helperText={social.le ? social.le : ""}
              />
            </Grid>

            <Grid item xs={2}>
              <IconButton disabled={socials.length === 1} onClick={() => handleRemoveSocial(social.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={handleAddSocial}
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

export default Step6;
