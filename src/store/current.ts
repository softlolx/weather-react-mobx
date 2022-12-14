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
    condition: {
      icon: string;
      text: string;
    };
  };
  location: {
    localtime: string;
    localtime_epoch: number;
    name: string;
  };
  forecast: {
    forecastday: [
      {
        day: {
          condition: {
            text: string;
          };
        };
      }
    ];
  };
}

function getCurrentTime(localtime: string) {
  return localtime.slice(10);
}

export class CurrentWeather {
  currentLocation = 'Paris';
  currentTemp = '';
  currentTime = '';
  feelslikeTemp = '';
  humidity = '';
  windDir = '';
  windSpeed = '';
  condition = '';
  icon = '';
  precipCondition = '';
  localtimestamp = 0;

  currentWeatherData: ICurrentWeatherData = {
    current: {
      temp_c: '',
      feelslike_c: '',
      humidity: '',
      wind_dir: '',
      wind_kph: '',
      condition: {
        icon: '',
        text: '',
      },
    },
    location: {
      localtime: '',
      name: '',
      localtime_epoch: 0,
    },
    forecast: {
      forecastday: [
        {
          day: {
            condition: { text: '' },
          },
        },
      ],
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
      this.condition = this.currentWeatherData.current.condition.text;
      this.icon = this.currentWeatherData.current.condition.icon;
      this.precipCondition =
        this.currentWeatherData.forecast.forecastday[0].day.condition.text;
      this.localtimestamp = this.currentWeatherData.location.localtime_epoch;
    });
  };

  changeLocation = (value: string) => {
    this.currentLocation = value;
  };
}

export const current = new CurrentWeather();
