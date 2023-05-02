import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { useFavorites } from '../../hooks/use-favorites';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../store/store';
import { getForecast } from '../../store/reducers/forecast/action-creators';
import { getWeather } from '../../store/reducers/weather/action-creators';
import { removeFromFavorites } from '../../store/reducers/favorites/slice'

export const Favorites = () => {
  const { favorites } = useFavorites();
  const dispatch = useAppDispatch();

  const handleClickCity = (city: string) => {
    dispatch(getWeather(city));
    dispatch(getForecast(city));
  };

  return (
    <Paper>
      <Grid>
        <Typography variant="h3" padding={1}>
          Favorites city
        </Typography>
        <List sx={{ padding: '0 5px' }}>
          {favorites.map((item) => (
            <ListItem key={item}>
              <ListItemButton
                sx={{ padding: '4px 8px' }}
                onClick={() => handleClickCity(item)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeFromFavorites(item)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Paper>
  );
};
