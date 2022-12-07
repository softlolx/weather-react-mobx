import styles from './Forecast.module.scss';
import * as React from 'react';

export interface IForecastProps {
  children: any;
}

export function Forecast({ children }: IForecastProps) {
  return <div className={styles.forecast}>{children}</div>;
}
