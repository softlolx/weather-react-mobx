import styles from './Hourly.module.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { HourlyItem } from '../HourlyItem/HourlyItem';
import { future } from '../../store/future';
import { current } from '../../store/current';

export interface IHourlyProps {}

export const Hourly = observer((props: IHourlyProps) => {
  //@ts-ignore
  const hours = future.forecast[0]?.hour.slice(parseInt(current.currentTime));

  return (
    <div className={styles.hourly}>
      {
        //@ts-ignore
        hours?.map((item) => {
          return (
            <HourlyItem
              key={item.time}
              icon={item.condition.icon}
              temp={item.temp_c}
              time={item.time}
            />
          );
        })
      }
    </div>
  );
});
