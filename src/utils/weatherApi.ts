import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL: string =
  location.protocol === 'http:'
    ? 'http://api.weatherapi.com/v1'
    : 'https://api.weatherapi.com/v1';
const apikey: string = 'c1f51487954341f28de192247220712';

export interface ICurrentResponse {
  current: {};
  location: {};
}

export async function fetchCurrentWeather(location: string) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/forecast.json?key=${apikey}&q=${location}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFutureForecast(location: string) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/forecast.json?key=${apikey}&q=${location}&days=10`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
