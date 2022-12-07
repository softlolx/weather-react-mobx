import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Details } from './components/Details/Details';
import { Forecast } from './components/Forecast/Forecast';
import { ForecastItem } from './components/ForecastItem/ForecastItem';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}
