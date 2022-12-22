import styles from './Hourly.module.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { HourlyItem } from '../HourlyItem/HourlyItem';
import { future } from '../../store/future';

let hourly = [...new Array(12)];

export interface IHourlyProps {}

export const Hourly = observer((props: IHourlyProps) => {
  return (
    <div className={styles.hourly}>
      {
        //@ts-ignore
        future.forecast[0]?.hour.map((item) => (
          <HourlyItem
            key={item.time}
            icon={item.condition.icon}
            temp={item.temp_c}
            time={item.time}
          />
        ))
      }
    </div>
  );
});
