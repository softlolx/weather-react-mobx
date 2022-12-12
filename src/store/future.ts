import { fetchFutureForecast } from '../utils/weatherApi';
import { makeAutoObservable, runInAction } from 'mobx';

interface IFutureWeatherData {
  location: { localtime: string };
  forecast: {
    forecastday: [];
  };
}

export class futureWeather {
  constructor() {
    makeAutoObservable(this);
  }

  forecast = [];
  today = '';

  futureWeatherData: IFutureWeatherData = {
    forecast: {
      forecastday: [],
    },
    location: {
      localtime: '',
    },
  };

  getTenDayForecast = async (location: string) => {
    this.futureWeatherData = await fetchFutureForecast(location);
    runInAction(() => {
      this.forecast = this.futureWeatherData.forecast.forecastday;
      this.today = this.futureWeatherData.location.localtime.slice(0, 10);
    });
  };
}

export const future = new futureWeather();
