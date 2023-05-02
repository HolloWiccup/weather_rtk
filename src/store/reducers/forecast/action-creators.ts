import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IForecastWeather } from '../../../models/iforecast';
import { createUrl } from '../../../utils/api-helper';
import { SERVER_URL } from '../../../constants';
import { outputForecast } from '../../../utils/helpers';

export const getForecast = createAsyncThunk(
  'forecast/city',
  async (city: string, thunkAPI) => {
    try {
      const response = await axios.get<IForecastWeather>(
        createUrl(SERVER_URL.FORECAST, city)
      );
      return outputForecast(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue('forecast error');
    }
  }
);
