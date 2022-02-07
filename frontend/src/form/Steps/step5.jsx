import React, { useState } from "react";
import { Box, Grid, IconButton, InputLabel, MenuItem, NativeSelect, Paper, Select, TextField } from "@material-ui/core";
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
import DatePicker from "react-datepicker";
// WORK exp STEP

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {

  const [socials, setSocials] = useState([
    { id: uuidv4(), social: '', link: '' },
  ]);

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
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Social Accounts",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      {socials.map((social, id) => (
        <Grid container style={{ marginBottom: "16px" }} key={id}>

          <Grid item xs={5} >
            <InputLabel >Social</InputLabel>
            <Select
              name="social"
              value={social.social}
              onChange={event => handleChangeInput(social.id, event)}
              label="Social"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value='GitHub'>GitHub</MenuItem>
              <MenuItem value='LinkedIn'>LinkedIn</MenuItem>
              <MenuItem value='Telegram'>Telegram</MenuItem>
              <MenuItem value='Telegram'>Instagram</MenuItem>
              <MenuItem value='Telegram'>Facebook</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={5} >
            <TextField
              name="link"
              label="Profile Link"
              value={social.link}
              onChange={event => handleChangeInput(social.id, event)}
            />
          </Grid>

          <Grid item xs={2}>
            <IconButton disabled={social.length === 1} onClick={() => handleRemoveSocial(social.id)}>
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
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "Submit", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
