import styles from './HourlyItem.module.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';

export interface IHourlyItemProps {
  temp: string;
  icon: string;
  time: string;
}

export const HourlyItem = observer(({ temp, icon, time }: IHourlyItemProps) => {
  return (
    <div className={styles.hourlyItem}>
      <span className={styles.time}>{time?.slice(10)}</span>
      <img src={icon} alt="conditions image" className={styles.img} />
      <span className={styles.temp}>{Math.floor(+temp)}&#8451;</span>
    </div>
  );
});
