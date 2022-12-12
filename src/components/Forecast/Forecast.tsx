import styles from './Forecast.module.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { ForecastItem } from '../ForecastItem/ForecastItem';
import { future } from '../../store/future';

export interface IForecastProps {}
export interface IForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: { text: string; icon: string };
  };
}

const monthsArray = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function getDate(date: string) {
  const today = future.forecast;
  const now = new Date(date);
  return `${now.getDate()} ${monthsArray[now.getMonth()]}`;
}

export const Forecast = observer((props: IForecastProps) => {
  return (
    <div className={styles.forecast}>
      {future.forecast.map((item: IForecastDay) => (
        <ForecastItem
          key={item.date}
          maxTemp={item.day.maxtemp_c.toString()}
          minTemp={item.day.mintemp_c.toString()}
          condition={item.day.condition.text}
          day={getDate(item.date)}
          icon={item.day.condition.icon}
        />
      ))}
    </div>
  );
});
