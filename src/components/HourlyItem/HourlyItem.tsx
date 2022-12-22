import styles from './HourlyItem.module.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';
import image from '../../images/248.png';

export interface IHourlyItemProps {}

export const HourlyItem = observer(({}: IHourlyItemProps) => {
  return (
    <div className={styles.hourlyItem}>
      <span className={styles.time}>12:00</span>
      <img src={image} alt="conditions image" className={styles.img} />
      <span className={styles.temp}>+12&#8451;</span>
    </div>
  );
});
