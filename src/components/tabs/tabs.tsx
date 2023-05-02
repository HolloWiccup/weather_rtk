import { Box, Paper, Tab } from '@mui/material';
import { useState } from 'react';
import { TabPanel } from './tab-panel';
import Tabs from '@mui/material/Tabs';
import { TABS } from '../../constants';
import { Now } from './now';
import { Details } from './details';
import { Forecast } from './forecast';

const TABS_PANEL = {
  now: <Now />,
  details: <Details />,
  forecast: <Forecast />,
};

function allyProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export const WeatherTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {Object.values(TABS).map((item, index) => (
            <Tab label={item} {...allyProps(index)} key={item} />
          ))}
        </Tabs>
      </Box>
      {Object.values(TABS_PANEL).map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          <Box height="312px" width="252px">
            {item}
          </Box>
        </TabPanel>
      ))}
    </Paper>
  );
};
