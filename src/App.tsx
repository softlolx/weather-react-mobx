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
import { current } from './store/current';

export const App = observer(() => {
  const [isLocationPopupopened, setIsLocationPopupopened] = useState(false);

  useEffect(() => {
    getCurrentWeather(current.currentLocation);
  }, []);

  async function getCurrentWeather(location: string) {
    await current.getCurrentWeatherData(location);
  }

  function toggleLocationPopup() {
    setIsLocationPopupopened((prev) => !prev);
  }

  return (
    <div className="App">
      <Header onSelectButtonClick={toggleLocationPopup} />
      <Main
        currentTemp={current.currentTemp}
        currentLocation={current.currentLocation}
        currentTime={current.currentTime}
      />
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
