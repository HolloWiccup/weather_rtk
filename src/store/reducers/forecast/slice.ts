import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IForecastWeatherNormalized } from '../../../models/iforecast';
import { getForecast } from './action-creators';
import { DEFAULT } from '../../../constants';

interface ForecastState {
  isLoading: boolean;
  error: string;
  forecast: IForecastWeatherNormalized;
}

const initialState: ForecastState = {
  isLoading: false,
  error: '',
  forecast: DEFAULT.FORECAST,
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {},
  extraReducers: {
    [getForecast.fulfilled.type]: (
      state,
      action: PayloadAction<IForecastWeatherNormalized>
    ) => {
      state.isLoading = false;
      state.forecast = action.payload;
      state.error = DEFAULT.ERROR;
    },
    [getForecast.pending.type]: (state) => {
      state.isLoading = true;
      state.error = DEFAULT.ERROR;
    },
    [getForecast.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.forecast = DEFAULT.FORECAST;
    },
  },
});

export const { reducer: forecastReducer } = forecastSlice;
