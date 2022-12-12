import { fetchCurrentWeather } from '../utils/weatherApi';
import { fetchDaylyWeather } from '../utils/weatherApi';
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
    name: string;
  };
}

interface IDailyWeatherData {
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
  windSpeed = '';
  condition = '';
  icon = '';
  precipCondition = '';

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
    },
  };

  dailyWeatherData = {
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
    });
  };

  getDailyWeather = async (location: string) => {
    this.dailyWeatherData = await fetchDaylyWeather(location);
    runInAction(() => {
      this.precipCondition =
        this.dailyWeatherData.forecast.forecastday[0].day.condition.text;
    });
  };

  changeLocation = (value: string) => {
    this.currentLocation = value;
  };
}

export const current = new CurrentWeather();
