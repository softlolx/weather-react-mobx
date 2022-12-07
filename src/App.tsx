import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Details } from './components/Details/Details';
import { Forecast } from './components/Forecast/Forecast';
import { ForecastItem } from './components/ForecastItem/ForecastItem';
import { Footer } from './components/Footer/Footer';
import { LocationSelect } from './components/LocationSelect/LocationSelect';

import { observer } from 'mobx-react-lite';
import { fetchCurrentWeather } from './utils/weatherApi';
import { currentWeatherStore } from './store/current';

export const App = observer(() => {
  const [isLocationPopupopened, setIsLocationPopupopened] = useState(false);
  const [location, setLocation] = useState('Minsk');
  const [currentTemp, setCurrentTemp] = useState('--');

  useEffect(() => {
    currentWeatherStore.getCurrentWeatherData();
  }, []);

  function toggleLocationPopup() {
    setIsLocationPopupopened((prev) => !prev);
  }

  // async function getCurentWeather(location: string) {
  //   const data = await fetchCurrentWeather(location);
  //   console.log(data);
  //   setCurrentTemp(data.current.temp_c);
  // }

  return (
    <div className="App">
      <Header onSelectButtonClick={toggleLocationPopup} />
      <Main currentTemp={currentTemp} currentLocation={location} />
      <Details />
      <Forecast>
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </Forecast>
      <Footer />
      {isLocationPopupopened && (
        <LocationSelect onCloseButtonCLick={toggleLocationPopup} />
      )}
    </div>
  );
});
