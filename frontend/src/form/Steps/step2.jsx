
import * as React from 'react';
import { Box, Grid, Paper } from "@material-ui/core";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import { useMutation, gql, useQuery } from "@apollo/client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function getBaseData(baseData) {
  const basicData = baseData ? baseData.baseData : {};
  return basicData;
}

function getLists(baseData) {
  const lists = baseData ? baseData.lists : {};
  return lists
}
function getCountries(baseData) {
  const basicData = getBaseData(baseData);
  const lists = getLists(basicData);
  if (lists) {
    const countries = lists ? lists.countries : [];
    return countries
  }
}

// ADDress DETAILS STEP
export default function Step2({ handleNext, handlePrev, }) {

  const [personal, setPersonal] = React.useState([
    { city: '', state: '', pincode: '', country: '', address: '' },
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

  const UPDATE_ADDRESS = gql`
  mutation updateAddress($address: String, $city: String, $country: String, $pincode: String, $state: String){
  updateAddress(
      address: $address,
      city: $city,
      country: $country,
      pincode: $pincode
      state: $state
  )
  {
    success
  }
  }
`
  const [updateAddress, { data, loading, error }] = useMutation(UPDATE_ADDRESS, {
    variables: {}
  });

  const { data: baseData } = useQuery(BASIC_DATA);
  const countries = getCountries(baseData);
  console.log("countries", countries, baseData)

  const handleMutation = (e) => {
    e.preventDefault();
    console.log("abcdsabjdhsahjgdgasjukfgkujsa: ", personal[0].address);
    updateAddress({
      variables: {
        address: personal[0].address,
        city: personal[0].city,
        country: personal[0].country,
        pincode: personal[0].pincode,
        state: personal[0].state,
      }
    });
  }

  const handleChange = (event) => {
    const newPersonal = personal.map(i => {
      i[event.target.name] = event.target.value
      return i;
    })
    setPersonal(newPersonal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  function handle(e) {
    handleSubmit(e);
    handleMutation(e);
    handleNext();
  }


  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        <Box mt={3} mb={2} />

        <TextField fullWidth
          id="outlined-multiline-static"
          name="address"
          label="Street Address"
          multiline
          rows={3}
          value={personal.address}
          onChange={handleChange}
        />

        <Grid container spacing={2} style={{ marginBottom: "16px" }, { marginTop: "16px" }}>
          <Grid item md={6}>
            <TextField fullWidth
              name="city"
              label="City"
              value={personal.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={6}>
            <TextField fullWidth
              name="state"
              label="State"
              value={personal.state}
              onChange={handleChange}
            />
          </Grid>

        </Grid>

        <Grid container spacing={2} style={{ marginBottom: "16px" }, { marginTop: "16px" }}>
          <Grid item md={6}>
            <TextField fullWidth
              name="pincode"
              label="Pincode"
              value={personal.pincode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item md={6}>
            <FormControl fullWidth>
              <InputLabel id="Countries">Country</InputLabel>
              <Select name="country" id="Countries" labelId="Countries" id="select" value={personal.country} onChange={handleChange}>
                {countries && countries?.map((item) => (
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>



        <Grid container component={Box} justify='flex-end' mt={2} p={2}>
          <Box ml={2}>
            <Button
              variant="outlined"
              onClick={handlePrev}
              color="primary">
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