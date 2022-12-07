import styles from './Main.module.scss';
import * as React from 'react';
import sunnyImg from '../../images/sunny.svg';

export interface IMainProps {
  currentTemp: string;
  currentLocation: string;
}

export function Main({ currentTemp, currentLocation }: IMainProps) {
  return (
    <div className={styles.main}>
      <div className={styles.main__tempContainer}>
        <span className={styles.main__temp}>{currentTemp}&#8451;</span>
        <img src={sunnyImg} alt="." className={styles.main__weatherImage} />
      </div>
      <div className={styles.main__infoContainer}>
        <span className={styles.main__time}>{currentTemp}</span>
        <span className={styles.main__location}>{currentLocation}</span>
      </div>
    </div>
  );
}
