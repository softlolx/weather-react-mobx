import { fetchFutureForecast } from '../utils/weatherApi';
import { makeAutoObservable, runInAction } from 'mobx';

interface IFutureWeatherData {
  forecast: {
    forecastday: [];
  };
}

export class futureWeather {
  constructor() {
    makeAutoObservable(this);
  }

  forecast = [];

  futureWeatherData: IFutureWeatherData = {
    forecast: {
      forecastday: [],
    },
  };

  getTenDayForecast = async (location: string) => {
    this.futureWeatherData = await fetchFutureForecast(location);
    runInAction(() => {
      this.forecast = this.futureWeatherData.forecast.forecastday;
    });
  };
}

export const future = new futureWeather();
