import { getImageURL } from './utils/api-helper';

const SERVER_URL = {
  WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
  FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
};

const IMAGE_SIZE = {
  small: '@2x',
  large: '@4x',
};

const DEFAULT = {
  INPUT_VALUE: '',
  ERROR: '',
  WEATHER: {
    sunrise: '',
    sunset: '',
    temperature: 22,
    feels_like: 22,
    description: 'sun',
    icon: getImageURL('10d', IMAGE_SIZE.large),
    city: 'Neverland',
  },
  FORECAST: {
    city: 'Neverland',
    list: [
      {
        date: '',
        time: '',
        temperature: 22,
        feels_like: 22,
        description: 'sun',
        icon: getImageURL('10d', IMAGE_SIZE.large),
      },
    ],
  },
  JSON_ARRAY: JSON.stringify([]),
  JSON_OBJECT: JSON.stringify({}),
  CITY: 'Архангельск',
};

const PAGE_LINKS = {
  HOME: '/',
  STATS: 'stats',
  HELP: 'help',
};

const STORAGE_KEYS = {
  FAVORITES: 'favorites',
  LAST_CITY: 'last-city',
  STATS: 'stats',
};

const TABS = {
  now: 'Сейчас',
  details: 'Детали',
  forecast: 'Прогноз',
};

export { SERVER_URL, DEFAULT, TABS, STORAGE_KEYS, PAGE_LINKS, IMAGE_SIZE };
