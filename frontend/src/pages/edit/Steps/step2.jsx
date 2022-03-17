import * as React from 'react';
import { Grid, Box, Paper } from "@mui/material";
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

  const BASIC_DATA = gql`
  query baseData{
  baseData
  {
    lists
    profile
  }
  }
`

  const GET_ADDRESS = gql`
  {
  address{
  address
  state
  pincode
  city
  country
  }
  }
  `

  const { loading, error, data } = useQuery(GET_ADDRESS);

  const [personal, setPersonal] = React.useState(
    { city: '', state: '', pincode: '', country: '', address: '' },
  );

  const [errors, setErrors] = React.useState({});




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
  const [updateAddress, { data1}] = useMutation(UPDATE_ADDRESS, {
    variables: {}
  });

  const { data: baseData } = useQuery(BASIC_DATA);
  const countries = getCountries(baseData);

  React.useEffect(() => {
    const address = data && data.address;
    const streetAddress = address && address.address;
    const country = address && address.country;
    const state = address && address.state;
    const pincode = address && address.pincode;
    const city = address && address.city;

    setPersonal({ city: city, state: state, pincode: pincode, country: country, address: streetAddress });

  }, [data]);

  const handleMutation = (e) => {
    e.preventDefault();
    updateAddress({
      variables: {
        address: personal.address,
        city: personal.city,
        country: personal.country,
        pincode: personal.pincode,
        state: personal.state,
      }
    });
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setPersonal({ ...personal, [evt.target.name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const temp = validate();
    setErrors(temp);
    if (Object.keys(temp).length === 0) {
      handleNext();
    }
    console.log(errors);
  };

  function handle(e) {
    handleSubmit(e);
    handleMutation(e);
  }

  const validate = () => {
    const errors = {};

    if (!personal.address) {
      errors.address = "Street address is required!";
    }
    if (!personal.city) {
      errors.city = "City is required!";
    }
    if (!personal.state) {
      errors.state = "State is required!";
    }
    if (!personal.pincode) {
      errors.pincode = "Pincode is required!";
    }
    return errors;
  };


  return (
    <form className="formHead" onSubmit={handleSubmit}>
      <Paper className="steps">
        <TextField fullWidth
          name="address"
          label="Street Address"
          multiline
          rows={3}
          value={personal.address}
          onChange={handleChange}
          error={errors.address}
          helperText={errors.address ? errors.address : ""}
        />

        <Grid container spacing={2} style={{ marginBottom: "16px", marginTop: "16px" }}>
          <Grid item md={6}>
            <TextField fullWidth
              name="city"
              label="City"
              value={personal.city}
              onChange={handleChange}
              error={errors.city}
              helperText={errors.city ? errors.city : ""}
            />
          </Grid>
          <Grid item md={6}>
            <TextField fullWidth
              name="state"
              label="State"
              value={personal.state}
              onChange={handleChange}
              error={errors.state}
              helperText={errors.state ? errors.state : ""}
            />
          </Grid>

        </Grid>

        <Grid container spacing={2} style={{ marginBottom: "16px", marginTop: "16px" }}>
          <Grid item md={6}>
            <TextField fullWidth
              name="pincode"
              label="Pincode"
              value={personal.pincode}
              onChange={handleChange}
              error={errors.pincode}
              helperText={errors.pincode ? errors.pincode : ""}
            />
          </Grid>
          <Grid item md={6}>
            <FormControl fullWidth>
              <InputLabel id="Countries-Label">Country</InputLabel>
              <Select name="country" id="Countries" labelId="Countries-Label" value={personal.country} onChange={handleChange}>
                {countries && countries?.map((item) => (
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>



        <Grid container component={Box} justifyContent='flex-end' mt={2} p={2}>
          {/* <Box ml={2}>
            <Button
              variant="outlined"
              onClick={handlePrev}
              color="primary">
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