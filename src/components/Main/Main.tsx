import styles from './Main.module.scss';
import * as React from 'react';

import { observer } from 'mobx-react-lite';
import { current } from '../../store/current';

export interface IMainProps {}

export const Main = observer(({}: IMainProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__tempContainer}>
        <span className={styles.main__temp}>
          {`${+current.currentTemp > 0 ? '+' : ''}${current.currentTemp}`}
          &#8451;
        </span>
        <img src={current.icon} alt="." className={styles.main__weatherImage} />
      </div>
      <div className={styles.main__infoContainer}>
        <span className={styles.main__time}>{current.currentTime}</span>
        <span className={styles.main__location}>
          {current.currentLocation} - {current.condition}
        </span>
      </div>
    </div>
  );
});
