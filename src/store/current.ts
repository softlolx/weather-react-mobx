import { fetchCurrentWeather } from '../utils/weatherApi';
import { makeAutoObservable, runInAction } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

interface ICurrentWeatherData {
  current: {
    temp_c: string;
    feelslike_c: string;
    humidity: string;
    wind_dir: string;
    wind_kph: string;
  };
  location: {
    localtime: string;
    name: string;
  };
}

function getCurrentTime(localtime: string) {
  // const date = new Date(timestamp * 1000);
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // console.log(`${hours}:${minutes}`);

  // return `${hours}:${minutes}`;
  return localtime.slice(10);
}

export class CurrentWeather {
  currentLocation = 'Paris';
  currentTemp = '';
  currentTime = '';
  feelslikeTemp = '';
  humidity = '';
  windDir = '';
  windSpeed = ';';

  currentWeatherData: ICurrentWeatherData = {
    current: {
      temp_c: '',
      feelslike_c: '',
      humidity: '',
      wind_dir: '',
      wind_kph: '',
    },
    location: {
      localtime: '',
      name: '',
    },
  };

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'CurrentWeather',
      properties: ['currentLocation'],
      storage: window.localStorage,
    });
  }

  getCurrentWeatherData = async (location: string) => {
    this.currentWeatherData = await fetchCurrentWeather(location);
    runInAction(() => {
      this.currentTemp = Math.round(
        +this.currentWeatherData.current.temp_c
      ).toString();
      this.feelslikeTemp = Math.round(
        +this.currentWeatherData.current.feelslike_c
      ).toString();
      this.humidity = this.currentWeatherData.current.humidity.toString();
      this.windDir = this.currentWeatherData.current.wind_dir;
      this.windSpeed = Math.round(
        +this.currentWeatherData.current.wind_kph
      ).toString();
      this.currentTime = getCurrentTime(
        this.currentWeatherData.location.localtime
      );
      this.currentLocation = this.currentWeatherData.location.name;
    });
  };

  changeLocation = (value: string) => {
    this.currentLocation = value;
  };
}

export const current = new CurrentWeather();
