import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField'
import { Button, IconButton, Paper, Box, Grid } from "@mui/material";
import { useMutation, gql, useQuery } from "@apollo/client";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from "@mui/material/InputLabel";

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

// SOCIAL STEP

export default function Step6({
  handleNext,
  handlePrev,
}) {

  const GET_SOCIALS = gql`
  {
    socials{
    id
    userName
    platform
  }
  }
  `
  const { loading, error, data, refetch } = useQuery(GET_SOCIALS);

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

  const DELETE_SOCIAL = gql`
mutation deleteSocial($pk: UUID) {
  deleteSocial(pk: $pk) {
    success
  }
}
`

  const [deleteSocial] = useMutation(DELETE_SOCIAL, {
    variables: {}
  });

  const [updateSocial] = useMutation(UPDATE_Social, {
    variables: {}
  });

  const { data: baseData } = useQuery(BASIC_DATA);
  const social_medias = getSocial(baseData);

  React.useEffect(() => {
    const socials = data && data.socials;
    const length = socials && socials.reduce((a, obj) => a + Object.keys(obj).length, 0);
    if (length) {
      let social = socials && socials.map(obj => ({
        pk: obj.id,
        id: obj.id,
        userName: obj.userName,
        platform: obj.platform
      }));
      social && setSocials(social);
    }
  }, [data]);

  const handleMutation = (e) => {
    e.preventDefault();
    updateSocial({
      variables: {
        socialData: socials,
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
    console.log(socials)
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
    deleteSocial({ variables: { pk: pk } });
    values.splice(values.findIndex(value => value.pk === pk), 1);
    setSocials(values);
  }

  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        {socials.map((social) => (
          <Grid container spacing={2} style={{ marginBottom: "16px" }} key={social.id}>

            <Grid item md={5} >

              <FormControl fullWidth>
                <InputLabel id="Platform-Label">Platform</InputLabel>
                <Select name="platform" id="platform" labelId="Platform-Label" value={social.platform} onChange={event => handleChangeInput(social.id, event)}>
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
              Finish
            </Button>
          </Box>
        </Grid>
      </Paper>
    </form>
  );
};

