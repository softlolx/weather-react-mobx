import { fetchCurrentWeather } from '../utils/weatherApi';
import { makeAutoObservable, runInAction } from 'mobx';

interface ICurrentWeatherData {
  current: {
    temp_c: string;
  };
  location: {
    localtime: string;
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
  currentLocation: string = 'Paris';
  currentTemp: string = '';
  currentTime: string = '';

  currentWeatherData: ICurrentWeatherData = {
    current: {
      temp_c: '',
    },
    location: {
      localtime: '',
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  getCurrentWeatherData = async (location: string) => {
    this.currentWeatherData = await fetchCurrentWeather(location);
    runInAction(() => {
      this.currentTemp = this.currentWeatherData.current.temp_c;
      this.currentTime = getCurrentTime(
        this.currentWeatherData.location.localtime
      );
    });
    // runInAction(() => {
    //   this.currentTemp = this.currentWeatherData.current.temp_c;
    // });
  };

  changeLocation = (value: string) => {
    this.currentLocation = value;
  };
}

export const current = new CurrentWeather();
