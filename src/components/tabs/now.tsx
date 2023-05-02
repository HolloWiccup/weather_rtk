import { Grid, IconButton, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useWeather } from '../../hooks/use-weather.ts';
import { useFavorites } from '../../hooks/use-favorites.ts';
import { weatherStorage } from '../../utils/storage.ts';
import { useAppDispatch } from '../../store/store.ts';
import {
  removeFromFavorites,
  addToFavorites,
} from '../../store/reducers/favorites/slice.ts';

export const Now = () => {
  const { weather, error, isLoading } = useWeather();
  const { favorites } = useFavorites();
  const isExists = favorites.includes(weather.city);
  const dispatch = useAppDispatch();

  const handleClick = (city: string) => {
    dispatch(isExists ? removeFromFavorites(city) : addToFavorites(city));
    weatherStorage.updateFavorites(city);
  };

  return (
    <>
      {!isLoading ? (
        !error && (
          <Grid>
            <Typography variant="h2">{weather.temperature}&deg;C</Typography>
            <img src={weather.icon} alt={weather.description} />
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h5">{weather.city}</Typography>
              <IconButton onClick={() => handleClick(weather.city)}>
                <FavoriteIcon sx={{ color: isExists ? 'red' : 'gray' }} />
              </IconButton>
            </Stack>
          </Grid>
        )
      ) : (
        <Typography variant="h2">Loading...</Typography>
      )}
    </>
  );
};
