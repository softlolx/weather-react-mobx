import styles from './Main.module.scss';
import * as React from 'react';
import sunnyImg from '../../images/sunny.svg';

export interface IMainProps {}

export function Main(props: IMainProps) {
  return (
    <div className={styles.main}>
      <div className={styles.main__tempContainer}>
        <span className={styles.main__temp}>+20&#8451;</span>
        <img src={sunnyImg} alt="." className={styles.main__weatherImage} />
      </div>
      <div className={styles.main__infoContainer}>
        <span className={styles.main__time}>15:35</span>
        <span className={styles.main__location}>Your location</span>
      </div>
    </div>
  );
}
