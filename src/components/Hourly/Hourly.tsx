import styles from './Hourly.module.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { HourlyItem } from '../HourlyItem/HourlyItem';
// import { hourly } from '../../store/future';

let hourly = [...new Array(12)];

export interface IHourlyProps {}
console.log(hourly);

export const Hourly = observer((props: IHourlyProps) => {
  return (
    <div className={styles.hourly}>
      {hourly.map((item) => (
        <HourlyItem />
      ))}
    </div>
  );
});
