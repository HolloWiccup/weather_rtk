import { createSlice } from '@reduxjs/toolkit';
import { weatherStorage } from '../../../utils/storage';

interface FavoritesState {
  favorites: string[];
}

const initialState: FavoritesState = {
  favorites: weatherStorage.getFavorites(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter((item) => item !== payload);
    },
  },
});

const favoritesReducer = favoritesSlice.reducer;
const { removeFromFavorites, addToFavorites } = favoritesSlice.actions;
export {
  favoritesReducer,
  removeFromFavorites,
  addToFavorites,
  favoritesSlice,
};
