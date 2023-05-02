import { Box, Grid } from '@mui/material';
import { Favorites } from './favorites/favorites';
import { WeatherForm } from './form/form';
import { WeatherTabs } from './tabs/tabs';

export const Weather = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid display="grid" gap={2}>
        <WeatherForm />
        <Grid container gap={1}>
          <WeatherTabs />
          <Favorites />
        </Grid>
      </Grid>
    </Box>
  );
};
