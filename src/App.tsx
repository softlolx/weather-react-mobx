import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Details } from './components/Details/Details';
import { Forecast } from './components/Forecast/Forecast';
import { ForecastItem } from './components/ForecastItem/ForecastItem';
import { Footer } from './components/Footer/Footer';
import { LocationSelect } from './components/LocationSelect/LocationSelect';

export function App() {
  const [isLocationPopupopened, setIsLocationPopupopened] = useState(false);
  function toggleLocationPopup() {
    setIsLocationPopupopened((prev) => !prev);
  }

  return (
    <div className="App">
      <Header onSelectButtonClick={toggleLocationPopup} />
      <Main />
      <Details />
      <Forecast>
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
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
}
