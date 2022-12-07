import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL: string = 'http://api.weatherapi.com/v1';
const apikey: string = 'c1f51487954341f28de192247220712';

export interface ICurrentResponse {
  current: {};
  location: {};
}

export async function fetchCurrentWeather(location: string) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/current.json?key=${apikey}&q=${location}`
    );
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
