import styles from './ForecastItem.module.scss';
import * as React from 'react';
import sunnyImg from '../../images/sunny.svg';

export interface IForecastItemProps {}

export function ForecastItem(props: IForecastItemProps) {
  return (
    <div className={styles.forecastItem}>
      <h3 className={styles.forecastItem__weekday}>Today</h3>
      <span className={styles.forecastItem__date}>28 sep</span>
      <img src={sunnyImg} alt="." className={styles.forecastItem__icon} />
      <span className={styles.forecastItem__temp}>20°</span>
      <span className={styles.forecastItem__feelsLike}>15°</span>
      <span className={styles.forecastItem__subtitle}>Sunny</span>
    </div>
  );
}
