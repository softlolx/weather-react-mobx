import { fetchCurrentWeather } from '../utils/weatherApi';
import { makeAutoObservable } from 'mobx';

interface ICurrentWeatherData {
  current: {
    temp_c: string;
  };
  location: {
    localtime_epoch: number;
  };
}

function getCurrentTime(timestamp: number) {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${hours}:${minutes}`;
}
export class CurrentWeather {
  currentLocation: string = '';
  currentTemp: string = '';
  currentTime: string = '';

  currentWeatherData: ICurrentWeatherData = {
    current: {
      temp_c: '',
    },
    location: {
      localtime_epoch: 0,
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  getCurrentWeatherData = async (location: string) => {
    this.currentWeatherData = await fetchCurrentWeather(location);
    this.currentTemp = this.currentWeatherData.current.temp_c;
    this.currentTime = getCurrentTime(
      this.currentWeatherData.location.localtime_epoch
    );
  };
}

export const current = new CurrentWeather();
