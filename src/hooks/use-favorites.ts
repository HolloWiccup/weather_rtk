import { useTypedSelector } from './use-typed-selector';

export const useFavorites = () => ({
  ...useTypedSelector((state) => state.favorites),
});
