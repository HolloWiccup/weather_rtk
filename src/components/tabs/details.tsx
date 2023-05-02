import { Grid, Typography } from '@mui/material';
import { useWeather } from '../../hooks/use-weather';

export const Details = () => {
  const { weather, isLoading, error } = useWeather();

  return (
    <>
      {!isLoading ? (
        !error && (
          <Grid>
            <Typography marginBottom={4} variant="h5">
              {weather.city}
            </Typography>
            <Typography marginBottom={2} variant="h5">
              Температура: {weather.temperature}&deg;C
            </Typography>
            <Typography marginBottom={2} variant="h5">
              Ощущается: {weather.feels_like}&deg;C
            </Typography>
            <Typography marginBottom={2} variant="h5">
              Рассвет в: {weather.sunrise}
            </Typography>
            <Typography marginBottom={2} variant="h5">
              Закат в: {weather.sunset}
            </Typography>
          </Grid>
        )
      ) : (
        <Typography variant="h2">Loading...</Typography>
      )}
    </>
  );
};
