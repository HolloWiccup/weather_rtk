import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IWeather } from '../../../models/iweather';
import { SERVER_URL } from '../../../constants';
import { createUrl } from '../../../utils/api-helper';
import { outputWeather } from '../../../utils/helpers';
import { weatherStorage } from '../../../utils/storage';

export const getWeather = createAsyncThunk(
  'weather/city',
  async (city: string, thunkAPI) => {
    try {
      const response = await axios.get<IWeather>(
        createUrl(SERVER_URL.WEATHER, city)
      );
      weatherStorage.setLastCity(response.data.name);
      weatherStorage.updateStats(response.data.name);
      return outputWeather(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);