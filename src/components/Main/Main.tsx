import styles from './Main.module.scss';
import * as React from 'react';
import sunnyImg from '../../images/sunny.svg';

export interface IMainProps {
  currentTemp: string;
  currentLocation: string;
  currentTime: string;
  condition: string;
  icon: string;
}

export function Main({
  currentTemp,
  currentLocation,
  currentTime,
  condition,
  icon,
}: IMainProps) {
  return (
    <div className={styles.main}>
      <div className={styles.main__tempContainer}>
        <span className={styles.main__temp}>
          {`${+currentTemp > 0 ? '+' : ''}${currentTemp}`}&#8451;
        </span>
        <img src={icon} alt="." className={styles.main__weatherImage} />
      </div>
      <div className={styles.main__infoContainer}>
        <span className={styles.main__time}>{currentTime}</span>
        <span className={styles.main__location}>
          {currentLocation} - {condition}
        </span>
      </div>
    </div>
  );
}
