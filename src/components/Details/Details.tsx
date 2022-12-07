import styles from './Details.module.scss';
import * as React from 'react';
import sunnyImg from '../../images/sunny.svg';

export interface IDetailsProps {}

export function Details(props: IDetailsProps) {
  return (
    <div className={styles.details}>
      <div className={styles.details__infoContainer}>
        <span className={styles.details__temp}>+20&#8451;</span>
        <img src={sunnyImg} alt="." className={styles.details__weatherImage} />
      </div>
    </div>
  );
}
