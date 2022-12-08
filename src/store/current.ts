import { fetchCurrentWeather } from '../utils/weatherApi';
import { makeAutoObservable, runInAction } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

interface ICurrentWeatherData {
  current: {
    temp_c: string;
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
  currentLocation: string = 'Paris';
  currentTemp: string = '';
  currentTime: string = '';

  currentWeatherData: ICurrentWeatherData = {
    current: {
      temp_c: '',
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
      this.currentTime = getCurrentTime(
        this.currentWeatherData.location.localtime
      );
      this.currentLocation = this.currentWeatherData.location.name;
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
