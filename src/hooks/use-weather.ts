import { useTypedSelector } from './use-typed-selector';

export const useWeather = () => ({
  ...useTypedSelector((state) => state.weather),
});
