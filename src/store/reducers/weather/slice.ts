import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IWeatherNormalized } from '../../../models/iweather';
import { getWeather } from './action-creators';
import { DEFAULT } from '../../../constants';

interface WeatherState {
  isLoading: boolean;
  error: string;
  weather: IWeatherNormalized;
}

const initialState: WeatherState = {
  isLoading: false,
  error: DEFAULT.ERROR,
  weather: DEFAULT.WEATHER,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: {
    [getWeather.fulfilled.type]: (
      state,
      action: PayloadAction<IWeatherNormalized>
    ) => {
      state.isLoading = false;
      state.weather = action.payload;
      state.error = DEFAULT.ERROR;
    },
    [getWeather.pending.type]: (state) => {
      state.isLoading = true;
      state.error = DEFAULT.ERROR;
    },
    [getWeather.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.weather = DEFAULT.WEATHER;
    },
  },
});

export const { reducer: weatherReducer } = weatherSlice;
