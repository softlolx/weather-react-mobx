import styles from './ForecastItem.module.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';

export interface IForecastItemProps {
  maxTemp: string;
  minTemp: string;
  day: string;
  condition: string;
  icon: string;
}

export const ForecastItem = observer(
  ({ maxTemp, minTemp, day, condition, icon }: IForecastItemProps) => {
    return (
      <div className={styles.forecastItem}>
        <h3 className={styles.forecastItem__weekday}>{day}</h3>
        {/* <span className={styles.forecastItem__date}></span> */}
        <img src={icon} alt="." className={styles.forecastItem__icon} />
        <span className={styles.forecastItem__temp}>
          {`${+maxTemp > 0 ? '+' : ''}${maxTemp}`}&#8451;
        </span>
        <span className={styles.forecastItem__feelsLike}>
          {`${+minTemp > 0 ? '+' : ''}${minTemp}`}&#8451;
        </span>
        <span className={styles.forecastItem__subtitle}>{condition}</span>
      </div>
    );
  }
);
