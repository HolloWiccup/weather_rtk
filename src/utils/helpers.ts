import { IMAGE_SIZE } from '../constants';
import {
  IForecastWeather,
  IForecastWeatherNormalized,
  List,
  ListNormalized,
} from '../models/iforecast';
import { IWeather, IWeatherNormalized } from '../models/iweather';
import { getImageURL } from './api-helper';

const addZero = (number: number) => (number < 10 ? '0' + number : number);

const getDiffTime = (timezone: number, hours: number) => {
  const number = (24 + hours + timezone / 3600) % 24;
  return addZero(number);
};

const getDate = (seconds: number) => {
  const date = new Date(seconds * 1000);
  const timezoneOffset = date.getTimezoneOffset() / 60;
  return {
    hours: date.getHours() + timezoneOffset,
    minutes: addZero(date.getMinutes()),
  };
};

const listTransform = (list: List[]): ListNormalized[] => {
  return list.map((item) => ({
    date: item.dt_txt.split(' ')[0],
    time: item.dt_txt.split(' ')[1],
    temperature: Math.round(item.main.temp),
    feels_like: Math.round(item.main.feels_like),
    description: item.weather[0].description,
    icon: getImageURL(item.weather[0].icon, IMAGE_SIZE.small),
  }));
};

const outputWeather = (weather: IWeather): IWeatherNormalized => {
  const sunriseCity = getDate(weather.sys.sunrise);
  const sunsetCity = getDate(weather.sys.sunset);
  const sunriseCityHours = getDiffTime(weather.timezone, sunriseCity.hours);
  const sunsetCityHours = getDiffTime(weather.timezone, sunsetCity.hours);
  return {
    sunrise: `${sunriseCityHours}:${sunriseCity.minutes}`,
    sunset: `${sunsetCityHours}:${sunsetCity.minutes}`,
    icon: getImageURL(weather.weather[0].icon, IMAGE_SIZE.large),
    description: weather.weather[0].description,
    feels_like: Math.round(weather.main.feels_like),
    temperature: Math.round(weather.main.temp),
    city: weather.name,
  };
};

const outputForecast = (
  forecast: IForecastWeather
): IForecastWeatherNormalized => {
  return {
    city: forecast.city.name,
    list: listTransform(forecast.list),
  };
};

interface ICitiesStats {
  [key: string]: number;
}

const findMostPopularCity = (list: ICitiesStats) => {
  const keys = Object.keys(list);
  if (keys.length === 0) return;
  return keys.reduce((prevKey, currKey) =>
    list[prevKey] > list[currKey] ? prevKey : currKey
  );
};

export { outputWeather, outputForecast, findMostPopularCity };
