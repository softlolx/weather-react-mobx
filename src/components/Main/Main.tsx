import styles from './Main.module.scss';
import * as React from 'react';

export interface IMainProps {}

export function Main(props: IMainProps) {
  return (
    <div className="main">
      <div className={styles.main__tempContainer}>
        <span className={styles.main__temp}>+20&#8451;</span>
        <img src="#" alt="." className={styles.main__weatherImage}></img>
      </div>
      <div className={styles.main__infoContainer}>
        <span className={styles.main__time}>15:35</span>
        <span className={styles.main__location}>Your location</span>
      </div>
    </div>
  );
}
