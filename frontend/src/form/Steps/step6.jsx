import React, { useState } from "react";
import { Box, Grid, Paper, MenuItem } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select';
import { Button, IconButton } from "@mui/material";
// import MenuItem from '@mui/material/MenuItem';


// WORK exp STEP

const Step6 = ({

  handleNext,
  handlePrev,
}) => {

  const [socials, setSocials] = useState([
    { id: uuidv4(), social: '', link: '' },
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
    const newSocial = socials.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setSocials(newSocial);
  }

  const handleAddSocial = () => {
    setSocials([...socials, { id: uuidv4(), social: '', link: '' }])
  }

  const handleRemoveSocial = id => {
    const values = [...socials];
    values.splice(values.findIndex(value => value.id === id), 1);
    setSocials(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        <Box mt={2} mb={2}>
          {renderText({
            label: "Social Accounts",
            type: "h6",
            color: "textPrimary",
            align: "center",
          })}
        </Box>

        {socials.map((social) => (
          <Grid container style={{ marginBottom: "16px" }} key={social.id}>

            <Grid item md={5} >
              <Select fullwidth
                defaultValue='s'
                name="social"
                value={social.social}
                onChange={event => handleChangeInput(social.id, event)}
                label="Social"
              >
                <MenuItem value="s">
                  <em>Social</em>
                </MenuItem>
                <MenuItem value='GitHub'>GitHub</MenuItem>
                <MenuItem value='LinkedIn'>LinkedIn</MenuItem>
                <MenuItem value='Telegram'>Telegram</MenuItem>
                <MenuItem value='Instagram'>Instagram</MenuItem>
                <MenuItem value='Facebook'>Facebook</MenuItem>
              </Select>


            </Grid>

            <Grid item fullwidth md={5} >
              <TextField
                name="link"
                label="Profile Link"
                value={social.link}
                onChange={event => handleChangeInput(social.id, event)}
              />
            </Grid>

            <Grid item xs={2}>
              <IconButton disabled={socials.length === 1} onClick={() => handleRemoveSocial(social.id)}>
                <RemoveIcon />
              </IconButton>
              <IconButton
                onClick={handleAddSocial}
              >
                <AddIcon />
              </IconButton>
            </Grid>
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

export default Step6;
