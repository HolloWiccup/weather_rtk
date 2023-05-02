import { DEFAULT, STORAGE_KEYS } from '../constants';

export const weatherStorage = {
  getFavorites(): string[] {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEYS.FAVORITES) ?? DEFAULT.JSON_ARRAY
    );
  },
  updateFavorites(city: string) {
    const favorites = this.getFavorites();
    const newFavorites = favorites.includes(city)
      ? favorites.filter((item) => item !== city)
      : [...favorites, city];
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites));
  },
  getLastCity() {
    return localStorage.getItem(STORAGE_KEYS.LAST_CITY) ?? DEFAULT.CITY;
  },
  setLastCity(city: string) {
    localStorage.setItem(STORAGE_KEYS.LAST_CITY, city);
  },
  updateStats(city: string) {
    const stats = this.getStats()
    stats[city] ? stats[city] += 1 : stats[city] = 1
    const updatedStats = JSON.stringify(stats)
    localStorage.setItem(STORAGE_KEYS.STATS, updatedStats);
  },
  getStats(){
    return JSON.parse(
      localStorage.getItem(STORAGE_KEYS.STATS) ?? DEFAULT.JSON_OBJECT
    );
  }
};
