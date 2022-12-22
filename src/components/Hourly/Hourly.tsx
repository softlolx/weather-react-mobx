import styles from './Hourly.module.scss';
import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { HourlyItem } from '../HourlyItem/HourlyItem';
import { future } from '../../store/future';
import { current } from '../../store/current';

export interface IHourlyProps {}

export const Hourly = observer((props: IHourlyProps) => {
  function getHours() {
    //@ts-ignore
    const hours = future.forecast[0]?.hour;
    const now = new Date(current.localtimestamp * 1000).getHours();
    return hours?.slice(now);
  }

  const hours = getHours();
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
