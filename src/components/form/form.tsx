import { IconButton, InputBase, Paper } from '@mui/material';
import { useState } from 'react';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { DEFAULT } from '../../constants';
import { useAppDispatch } from '../../store/store';
import { getForecast } from '../../store/reducers/forecast/action-creators';
import { getWeather } from '../../store/reducers/weather/action-creators';

const MIN_LENGTH = 2;

export const WeatherForm = () => {
  const [value, setValue] = useState(DEFAULT.INPUT_VALUE);
  const dispatch = useAppDispatch();

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.length <= MIN_LENGTH) return;
    dispatch(getWeather(value))
      .then(() => dispatch(getForecast(value)))
      .then(() => setValue(DEFAULT.INPUT_VALUE));
  };
  
  return (
    <Paper sx={{ padding: '0 0 0 5px' }}>
      <form onSubmit={handleSubmit}>
        <InputBase
          value={value}
          onChange={handleInputValue}
          fullWidth
          endAdornment={
            <IconButton>
              <LocationSearchingIcon />
            </IconButton>
          }
        />
      </form>
    </Paper>
  );
};
