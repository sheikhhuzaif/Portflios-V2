import React, { useState } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderText,
} from "../common/DisplayComponent";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import { Button, IconButton } from "@mui/material";
import { useMutation, gql, useQuery } from "@apollo/client";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from "@mui/material/InputLabel";
// import MenuItem from '@mui/material/MenuItem';

function getBaseData(baseData) {
  const basicData = baseData ? baseData.baseData : {};
  return basicData;
}

function getLists(baseData) {
  const lists = baseData ? baseData.lists : {};
  return lists
}
function getSocial(baseData) {
  const basicData = getBaseData(baseData);
  const lists = getLists(basicData);
  if (lists) {
    const social_medias = lists ? lists.social_medias : [];
    return social_medias
  }
}

// WORK exp STEP

export default function Step6({

  handleNext,
  handlePrev,
}) {

  const [socials, setSocials] = useState([
    { id: uuidv4(), pk: null, platform: '', userName: '' },
  ]);

  const BASIC_DATA = gql`
  query baseData{
  baseData
  {
    lists
    profile
  }
  }
`

  const UPDATE_Social = gql`
    mutation updateSocial($socialData: [GenericScalar]){
    updateSocial(
      socialData: $socialData
    )
    {
      success
    }
    }
  `

  const [updateSocial] = useMutation(UPDATE_Social, {
    variables: {}
  });

  const { data: baseData } = useQuery(BASIC_DATA);
  const social_medias = getSocial(baseData);
  console.log("social_media", social_medias, baseData);



  const handleMutation = (e) => {
    e.preventDefault();
    updateSocial({
      variables: {
        socialData: socials,
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
    const newSocial = socials.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setSocials(newSocial);
  }

  const handleAddSocial = () => {
    setSocials([...socials, { id: uuidv4(), pk: null, platform: '', userName: '' }])
  }

  const handleRemoveSocial = pk => {
    const values = [...socials];
    values.splice(values.findIndex(value => value.pk === pk), 1);
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
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={social.id}>

            <Grid item md={5} >

              <FormControl fullWidth>
                <InputLabel id="Platform">Platform</InputLabel>
                <Select name="platform" id="Platform" labelId="Countries" id="select" value={social.platform} onChange={handleChangeInput}>
                  {social_medias && social_medias?.map((item) => (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>


            </Grid>

            <Grid item md={5} >
              <TextField
                fullWidth
                name="userName"
                label="User Name"
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

