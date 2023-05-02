import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from './reducers/weather/slice';
import { favoritesReducer } from './reducers/favorites/slice';
import { forecastReducer } from './reducers/forecast/slice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
  favorites: favoritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, useAppDispatch };
