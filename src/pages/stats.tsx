import { List, ListItemText, Typography } from '@mui/material';
import { weatherStorage } from '../utils/storage';
import { findMostPopularCity } from '../utils/helpers';

export const Stats = () => {
  const cities = weatherStorage.getStats();
  const mostPopularCity = findMostPopularCity(cities);
  return (
    <>
      <List>
        <ListItemText>
          <Typography variant="h3">Статистика</Typography>
        </ListItemText>
        <ListItemText>
          <Typography variant="h5">Самый часто запрашиваемый город</Typography>
        </ListItemText>
        <ListItemText>
          <Typography variant="subtitle1">{mostPopularCity}</Typography>
        </ListItemText>
        <ListItemText>
          <Typography variant="h5">Другие запрашиваемые города</Typography>
        </ListItemText>
        {Object.entries(cities).map(([key, value]) => (
          <ListItemText key={key}>
            <Typography variant="subtitle1">{`${key}: ${value}`}</Typography>
          </ListItemText>
        ))}
      </List>
    </>
  );
};
