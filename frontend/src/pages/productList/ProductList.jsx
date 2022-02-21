import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import temp1 from '..\\..\\images\\temp1.png';
import temp2 from '..\\..\\images\\temp2.png';
import temp3 from '..\\..\\images\\temp3.png';
import { Stack } from '@mui/material';
import { Button } from '@material-ui/core';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className='' flex={4} sx={{ typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Template 1" value="1" />
            <Tab label="Template 2" value="2" />
            <Tab label="Template 3" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack spacing={2}>
            <img src={temp1}  alt="template 1"/>
            <Button href="#text-buttons">Use This Template</Button>
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          <Stack spacing={2}>
            <img src={temp2}  alt="template 2"/>
            <Button href="#text-buttons">Use This Template</Button>
          </Stack>
        </TabPanel>
        <TabPanel value="3">
          <Stack spacing={2}>
            <img src={temp3}  alt="template 3"/>
            <Button  href="#text-buttons">Use This Template</Button>
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
