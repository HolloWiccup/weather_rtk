import { useEffect } from 'react';
import { weatherStorage } from '../utils/storage';
import { Route, Routes } from 'react-router-dom';
import { Weather } from './weather';
import { Navbar } from './navbar/navbar';
import { Stats } from '../pages/stats';
import { Help } from '../pages/help';
import { getForecast } from '../store/reducers/forecast/action-creators';
import { getWeather } from '../store/reducers/weather/action-creators';
import { useAppDispatch } from '../store/store';

const PAGES = {
  '/': <Weather />,
  stats: <Stats />,
  help: <Help />,
};

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const city = weatherStorage.getLastCity();
    const timerId = setTimeout(() => {
      dispatch(getWeather(city));
      dispatch(getForecast(city));
      clearTimeout(timerId);
    }, 500);
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        {Object.entries(PAGES).map(([key, value]) => (
          <Route key={key} element={value} path={key} />
        ))}
      </Routes>
    </>
  );
}

export { App };
