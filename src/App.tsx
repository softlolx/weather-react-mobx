import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Details } from './components/Details/Details';
import { Forecast } from './components/Forecast/Forecast';
import { Footer } from './components/Footer/Footer';
import { LocationSelect } from './components/LocationSelect/LocationSelect';

import { observer } from 'mobx-react-lite';
import { current } from './store/current';
import { future } from './store/future';

export const App = observer(() => {
  const [isLocationPopupopened, setIsLocationPopupopened] = useState(false);

  useEffect(() => {
    getCurrentWeather(current.currentLocation);
    console.log('rerender');
  }, []);

  function getCurrentWeather(location: string) {
    Promise.all([
      current.getCurrentWeatherData(location),
      future.getTenDayForecast(location),
    ]);
  }

  function toggleLocationPopup() {
    setIsLocationPopupopened((prev) => !prev);
  }

  return (
    <div className="App">
      <Header onSelectButtonClick={toggleLocationPopup} />
      <Main />
      <Details />
      <Forecast />
      <Footer />
      {isLocationPopupopened && (
        <LocationSelect onCloseButtonCLick={toggleLocationPopup} />
      )}
    </div>
  );
});
