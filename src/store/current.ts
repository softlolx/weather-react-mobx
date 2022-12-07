import { fetchCurrentWeather } from '../utils/weatherApi';
import { makeAutoObservable } from 'mobx';

export class CurrentWeather {
  currentWeatherData = {};

  constructor() {
    makeAutoObservable(this);
  }

  getCurrentWeatherData = async () => {
    this.currentWeatherData = await fetchCurrentWeather('Minsk');
  };
}

export const currentWeatherStore = new CurrentWeather();
